import { defineEnvVars } from "@sveltejs/kit/env";

export const variables = defineEnvVars({
  // The origin of the Todos API, with no path and no trailing slash.
  // public: true makes it importable in browser code; static: true inlines
  // the build-time value, which a static site needs.
  VITE_API_URL: {
    public: true,
    static: true,
    schema: (value) => value || "http://localhost:8080",
  },
});
