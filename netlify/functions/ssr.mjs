// Netlify Function (Node runtime) — forwards every non-static request to the
// TanStack Start SSR handler built by Vite.
//
// The build outputs the server bundle to `dist/server/server.js` (an ES
// module that default-exports `{ fetch(request, env, ctx) }`).
//
// Unlike Netlify Edge Functions (Deno), Node functions fully support
// React 19's `react/jsx-runtime` exports used by the SSR bundle.

import handler from "../../dist/server/server.js";

// NOTE: do NOT export `config.path` here. In Netlify Functions v2, a path
// config claims those routes outright and bypasses the static publish dir,
// which would make /assets/*.css and /assets/*.js return SSR HTML instead
// of the real built files. Routing is handled by the [[redirects]] block
// in netlify.toml (force = false), so static assets in dist/client win and
// everything else falls through to this function.
export default async (request, context) => {
  try {
    return await handler.fetch(request, {}, context);
  } catch (error) {
    console.error("[netlify/ssr] handler failed:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
