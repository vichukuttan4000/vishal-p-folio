// Netlify Edge Function entry — forwards every non-static request to the
// TanStack Start SSR handler built by Vite.
//
// The build outputs the server bundle to `dist/server/server.js` (an ES
// module that default-exports `{ fetch(request, env, ctx) }`, matching the
// standard fetch handler shape that Netlify Edge Functions also use).
//
// We import it lazily so the edge function cold-starts cheaply.

import type { Context } from "https://edge.netlify.com";

// @ts-ignore — resolved at deploy time from the build output.
import handler from "../../dist/server/server.js";

export default async (request: Request, context: Context) => {
  try {
    return await handler.fetch(request, {}, context);
  } catch (error) {
    console.error("[netlify/ssr] handler failed:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};

export const config = {
  path: "/*",
  // Let static files in /dist/client (assets, favicon, robots.txt) be served
  // directly by Netlify's CDN instead of going through SSR.
  excludedPath: ["/assets/*", "/favicon.svg", "/robots.txt", "/resume.pdf"],
};
