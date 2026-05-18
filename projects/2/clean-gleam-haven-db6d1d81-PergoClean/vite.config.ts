import { defineConfig, type LovableViteTanstackOptions } from "@lovable.dev/vite-tanstack-config";

const options: LovableViteTanstackOptions = {
  tanstackStart: {
    server: { entry: "src/server.ts" },
  },
};

export default defineConfig(options);
