import type { APIRoute } from "astro";

export const prerender = false;

const env = (key: string): string | undefined =>
  (globalThis as { process?: { env?: Record<string, string | undefined> } })
    .process?.env?.[key] ??
  (import.meta.env as Record<string, string | undefined>)[key];

export const validCouponLead = (name: string, phone: string): boolean => {
  const digits = phone.replace(/\D/g, "");
  const national =
    digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;
  return name.trim().length > 0 && national.length === 10;
};

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const form = await request.formData();
  const name = String(form.get("name") ?? "").trim().slice(0, 100);
  const phone = String(form.get("phone") ?? "").trim();
  const source =
    String(form.get("lead_source") ?? "").trim().slice(0, 300) || undefined;

  if (!validCouponLead(name, phone)) {
    return json({ ok: false, error: "Missing or invalid name/phone" }, 400);
  }

  const base = env("SOLAR_OPS_URL") || env("OPS_URL");
  const key = env("LEAD_CAPTURE_KEY");
  if (!base || !key) {
    // If not configured, gracefully acknowledge so the user sees the coupon
    return json({ ok: true }, 200);
  }

  const clientIp =
    request.headers.get("x-nf-client-connection-ip") ??
    (() => {
      try {
        return clientAddress;
      } catch {
        return "";
      }
    })();

  try {
    const res = await fetch(`${base}/api/coupon-lead`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shared-Secret": key,
        "X-Forwarded-For": clientIp,
      },
      body: JSON.stringify({ name, phone, source }),
    });
    return json({ ok: res.ok }, res.status);
  } catch (err) {
    console.error("coupon-lead error:", err);
    return json({ ok: true }, 200);
  }
};
