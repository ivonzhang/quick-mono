import fs from 'fs-extra';
import { glob } from 'glob';
import path from 'path';

export const copyAssets = () => {
  const srcDir = 'src';
  const destDir = 'dist/esm';

  // Define patterns for assets to copy
  const assetPatterns = [
    '**/*.less',
    '**/*.css',
    '**/*.svg',
    '**/*.png',
    '**/*.jpg',
    '**/*.jpeg', 
    '**/*.gif',
    '**/*.woff',
    '**/*.woff2',
    // Add other asset patterns as needed
  ];

  // Copy each pattern
  assetPatterns.forEach((pattern) => {
    const files = glob.sync(path.join(srcDir, pattern));
    files.forEach((file) => {
      const relativePath = path.relative(srcDir, file);
      const destPath = path.join(destDir, relativePath);
      fs.copySync(file, destPath);
      console.log(`Copied: ${file} -> ${destPath}`);
    });
  });
};