// src/pages/llms.txt.ts
import type { APIRoute } from 'astro';

// Renderizado bajo demanda (SSR) para garantizar que la información esté siempre fresca
export const prerender = false;

export const GET: APIRoute = async () => {
  // 1. Obtener la variable de entorno de forma compatible (Vite + Node SSR)
  const envUrl =
    import.meta.env.PUBLIC_API_URL ||
    (typeof process !== 'undefined' ? process.env.PUBLIC_API_URL : undefined);

  if (!envUrl) {
    console.error('[llms.txt] PUBLIC_API_URL no está definida en el entorno.');
    return new Response('# Configuration Error\n\nPUBLIC_API_URL is missing.', {
      status: 500,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  }

  // 2. Normalizar la URL base (elimina barras finales o sufijos accidentales como /posts)
  const siteApiBase = envUrl
    .trim()
    .replace(/\/+$/, '')
    .replace(/\/posts\/?$/, '');

  try {
    // 3. Consultar el archivo llms.txt generado por el CRM
    const res = await fetch(`${siteApiBase}/llms.txt`, {
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
    console.error('[llms.txt] Error fetching from CRM:', error);
    return new Response('# Service Temporarily Unavailable\n\nPlease check back soon.', {
      status: 503,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  }
};
