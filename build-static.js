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
    
    // Copy files to root directory for GitHub Pages
    const rootDir = resolve(__dirname);
    await fs.copyFile(indexPath, resolve(rootDir, 'index.html'));
    await fs.copyFile(resolve(__dirname, 'docs/.nojekyll'), resolve(rootDir, '.nojekyll'));
    
    // Copy assets directory
    const assetsSourceDir = resolve(__dirname, 'docs/assets');
    const assetsDestDir = resolve(rootDir, 'assets');
    
    try {
      await fs.rm(assetsDestDir, { recursive: true, force: true });
    } catch (e) {
      // Assets directory might not exist
    }
    
    await fs.cp(assetsSourceDir, assetsDestDir, { recursive: true });
    console.log('✅ Copied files to root directory for GitHub Pages');
    
    // Copy CNAME if it exists and is not a comment
    const cnameSource = resolve(__dirname, 'docs/CNAME');
    try {
      const cnameContent = await fs.readFile(cnameSource, 'utf8');
      if (cnameContent.trim() && !cnameContent.startsWith('#')) {
        await fs.copyFile(cnameSource, resolve(rootDir, 'CNAME'));
        console.log('✅ Copied CNAME file');
      }
    } catch (e) {
      // CNAME file might not exist or might be empty
    }
    
    // List generated files
    const files = await fs.readdir(docsDir);
    console.log('📁 Generated files:', files.join(', '));
    
    console.log('🎉 Static site built successfully in ./docs folder!');
    console.log('🚀 Files also copied to root directory for GitHub Pages deployment.');
    
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

buildStatic();