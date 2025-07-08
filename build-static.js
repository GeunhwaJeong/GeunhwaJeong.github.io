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
          output: {
            entryFileNames: 'assets/[name]-[hash].js',
            chunkFileNames: 'assets/[name]-[hash].js',
            assetFileNames: 'assets/[name]-[hash].[ext]',
          },
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
    
    // Rename the HTML file to index.html for GitHub Pages
    const fs = await import('fs');
    const indexStaticPath = resolve(__dirname, 'docs/index.static.html');
    const indexPath = resolve(__dirname, 'docs/index.html');
    
    if (fs.existsSync(indexStaticPath)) {
      fs.renameSync(indexStaticPath, indexPath);
      console.log('Renamed index.static.html to index.html');
    }
    
    console.log('Static site built successfully in ./docs folder!');
    console.log('Ready for GitHub Pages deployment.');
    
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

buildStatic();