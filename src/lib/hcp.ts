export type LeadInput = {
  name: string;
  phone: string;
  email?: string;
  address?: string;
  problem: string;
  source?: string;
};

type Deps = { fetch: typeof fetch; apiKey?: string };

/**
 * Creates a customer in Housecall Pro from a website "Request Service" lead.
 */
export async function createHcpLead(input: LeadInput, deps: Deps) {
  if (!deps.apiKey) return { ok: false as const };

  const [first_name, ...rest] = input.name.trim().split(/\s+/);
  const body: Record<string, unknown> = {
    first_name,
    last_name: rest.join(" ") || "(web lead)",
    mobile_number: input.phone,
    email: input.email,
    notes: input.source
      ? `${input.problem}\n\nSource: ${input.source}`
      : input.problem,
    lead_source: input.source?.startsWith("openai")
      ? "Website — ChatGPT Ad"
      : "Website",
  };

  if (input.address) {
    body.addresses = [{ street: input.address }];
  }

  try {
    const r = await deps.fetch("https://api.housecallpro.com/customers", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${deps.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!r.ok) return { ok: false as const };
    const data = await r.json();
    return { ok: true as const, id: data.id };
  } catch (err) {
    console.error("createHcpLead network error:", err);
    return { ok: false as const };
  }
}
