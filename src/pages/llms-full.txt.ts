import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async () => {
  const envUrl =
    import.meta.env.PUBLIC_API_URL ||
    (typeof process !== 'undefined' ? process.env.PUBLIC_API_URL : undefined);

  if (!envUrl) {
    console.error('[llms-full.txt] PUBLIC_API_URL no está definida en el entorno.');
    return new Response('# Configuration Error\n\nPUBLIC_API_URL is missing.', {
      status: 500,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  }

  const siteApiBase = envUrl
    .trim()
    .replace(/\/+$/, '')
    .replace(/\/posts\/?$/, '');

  try {
    const res = await fetch(`${siteApiBase}/llms-full.txt`, {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        Pragma: 'no-cache',
      },
    });

    if (!res.ok) {
      throw new Error(`CRM returned HTTP ${res.status}`);
    }

    const markdown = await res.text();
    return new Response(markdown, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('[llms-full.txt] Error fetching from CRM:', error);
    return new Response('# Service Temporarily Unavailable\n\nPlease check back soon.', {
      status: 503,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  }
};
