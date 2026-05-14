// Netlify Function (Node runtime) — forwards every non-static request to the
// TanStack Start SSR handler built by Vite.
//
// The build outputs the server bundle to `dist/server/server.js` (an ES
// module that default-exports `{ fetch(request, env, ctx) }`).
//
// Unlike Netlify Edge Functions (Deno), Node functions fully support
// React 19's `react/jsx-runtime` exports used by the SSR bundle.

import handler from "../../dist/server/server.js";

export default async (request, context) => {
  try {
    return await handler.fetch(request, {}, context);
  } catch (error) {
    console.error("[netlify/ssr] handler failed:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};

export const config = {
  path: "/*",
};
