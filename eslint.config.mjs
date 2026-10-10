import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // This project is a pure emulation of a static Astro site: every link is a plain
      // <a> that triggers a full navigation, exactly as on the target. Swapping in
      // next/link would change the runtime behaviour being cloned.
      "@next/next/no-html-link-for-pages": "off",
    },
  },
]);

export default eslintConfig;
