import { defineConfig } from 'tsup';

export default defineConfig({
  entryPoints: ['src'], // 这里输入src/index.ts，则仅仅会打包index.ts文件，而不会打包index.ts文件中引用的其他文件。输入src，则会打包src目录下的所有文件。
  format: ['cjs'],
  // dts: true,
  outDir: 'dist',
});
