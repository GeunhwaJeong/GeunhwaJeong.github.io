#!/usr/bin/env node

import { build } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { promises as fs } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function buildStatic() {
  try {
    console.log('🚀 Building static site for GitHub Pages...');
    
    // Clean docs directory
    const docsDir = resolve(__dirname, 'docs');
    try {
      await fs.rm(docsDir, { recursive: true, force: true });
      console.log('🧹 Cleaned docs directory');
    } catch (e) {
      // Directory might not exist, that's okay
    }
    
    await build({
      root: resolve(__dirname, 'client'),
      build: {
        outDir: docsDir,
        emptyOutDir: true,
        rollupOptions: {
          input: resolve(__dirname, 'client/index.static.html'),
        },
      },
      resolve: {
        alias: {
          '@': resolve(__dirname, 'client/src'),
          '@shared': resolve(__dirname, 'shared'),
          '@assets': resolve(__dirname, 'attached_assets'),
        },
      },
      base: './',
      define: {
        'process.env.NODE_ENV': '"production"',
      },
    });
    
    // Rename the HTML file to index.html for GitHub Pages
    const indexStaticPath = resolve(__dirname, 'docs/index.static.html');
    const indexPath = resolve(__dirname, 'docs/index.html');
    
    try {
      await fs.access(indexStaticPath);
      await fs.rename(indexStaticPath, indexPath);
      console.log('✅ Renamed index.static.html to index.html');
    } catch (e) {
      console.log('⚠️  No index.static.html found, checking for index.html');
      try {
        await fs.access(indexPath);
        console.log('✅ index.html already exists');
      } catch (e) {
        console.error('❌ No index.html found in build output');
        process.exit(1);
      }
    }
    
    // Create a .nojekyll file to prevent GitHub Pages from processing the site with Jekyll
    await fs.writeFile(resolve(__dirname, 'docs/.nojekyll'), '');
    console.log('✅ Created .nojekyll file');
    
    // List generated files
    const files = await fs.readdir(docsDir);
    console.log('📁 Generated files:', files.join(', '));
    
    console.log('🎉 Static site built successfully in ./docs folder!');
    console.log('🚀 Ready for GitHub Pages deployment.');
    
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

buildStatic();