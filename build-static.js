#!/usr/bin/env node

import { build } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function buildStatic() {
  try {
    console.log('Building static site for GitHub Pages...');
    
    await build({
      root: resolve(__dirname, 'client'),
      build: {
        outDir: resolve(__dirname, 'docs'),
        emptyOutDir: true,
        rollupOptions: {
          input: resolve(__dirname, 'client/index.static.html'),
        },
      },
      resolve: {
        alias: {
          '@': resolve(__dirname, 'client/src'),
          '@shared': resolve(__dirname, 'shared'),
        },
      },
      base: './',
    });
    
    console.log('Static site built successfully in ./docs folder!');
    console.log('Ready for GitHub Pages deployment.');
    
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

buildStatic();