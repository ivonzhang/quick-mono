#! /usr/bin/env node
import { execSync } from 'child_process';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import chokidar from 'chokidar'; // Add chokidar for file watching
import { copyAssets } from './copy-assets.js'; // Adjust path if needed

const cliRoot = resolve(dirname(fileURLToPath(import.meta.url)), '../../');

console.log('##', cliRoot);

const execSyncOptions = { stdio: 'inherit' };

const tscCommand = cliRoot + '/node_modules/.bin/tsc';
const tscAliasCommand = cliRoot + '/node_modules/.bin/tsc-alias';

function build() {
  console.warn('Building esm-bundleless module...');
  console.warn('TSC');
  // @ts-ignore
  execSync(tscCommand + ' --outDir dist/esm', execSyncOptions);

  console.warn('Copying assets...');
  copyAssets();

  console.warn('Run tsc alias');
  // @ts-ignore
  execSync(tscAliasCommand + ' --resolve-full-paths true --outDir dist/esm', execSyncOptions);
}

export function run() {
  // Check for --watch flag
  const args = process.argv.slice(2);
  if (args.includes('--watch')) {
    console.warn('Watch mode enabled. Watching for file changes...');
    const watcher = chokidar.watch('src', { ignored: /dist|node_modules/ });
  
    watcher.on('change', (path) => {
      console.warn(`File changed: ${path}, rebuilding...`);
      build();
    });
  
    // Run the initial build
    build();
  } else {
    // Run a single build
    build();
  }
}
