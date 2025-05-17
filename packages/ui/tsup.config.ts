import { defineConfig } from "tsup";
import { lessLoader } from "esbuild-plugin-less";

export default defineConfig({
  entryPoints: ["src/index.ts"],
  format: ["esm"],
  dts: true,
  outDir: "dist",
  // esbuild 社区插件: https://github.com/esbuild/community-plugins
  esbuildPlugins: [
    lessLoader(
      {
        javascriptEnabled: true,
      },
      {
        // Loader options
        filter: /\._?less$/, // Custom file filter
        inline: false, // Control if LESS files should be inlined as strings
      }
    ),
  ],
});
