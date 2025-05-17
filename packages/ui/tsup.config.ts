import { defineConfig } from "tsup";
import { lessLoader } from "esbuild-plugin-less";
// @ts-ignore
import { readFile, writeFile, access } from "node:fs/promises"; // 想使用上类型声明，可以把当前文件加入到tsconfig.json的include配置中

export default defineConfig({
  entryPoints: ["src/index.ts"],
  format: ["esm", "cjs"],
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
  async onSuccess() {
    // 构建完成后，在 JS 中插入 CSS 导入语句
    insertCssImportToBundler();
  },
});

async function insertCssImportToBundler() {
  const jsFiles = ["dist/index.mjs"]; // 根据实际输出调整,esm模块可以这么用。commonjs可能要用require语句

  for (const jsFile of jsFiles) {
    if (await fileExists(jsFile)) {
      let content = await readFile(jsFile, "utf8");

      // 在文件开头插入 CSS 导入语句
      const cssImport = "import './index.css';\n";
      if (!content.startsWith(cssImport)) {
        content = cssImport + content;
        await writeFile(jsFile, content);
        console.log(`已在 ${jsFile} 中插入 CSS 导入`);
      }
    }
  }
}

async function fileExists(path: string) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}
