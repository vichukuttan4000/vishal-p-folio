// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// When BUILD_TARGET=netlify (set by netlify.toml), skip the Cloudflare Workers
// adapter so the SSR bundle is portable to a Netlify Edge Function.
// In the Lovable sandbox and on Cloudflare deploys, this env var is absent
// and the default Cloudflare build path is used.
const isNetlifyBuild = process.env.BUILD_TARGET === "netlify";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  cloudflare: isNetlifyBuild ? false : undefined,
  tanstackStart: {
    server: { entry: "server" },
  },
});
