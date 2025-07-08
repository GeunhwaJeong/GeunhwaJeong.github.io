import { promises as fs } from 'fs';
import { storage } from '../server/storage.js';
import path from 'path';

// Generate static JSON files for GitHub Pages
async function generateStaticFiles() {
  const distDir = path.join(process.cwd(), 'dist');
  const apiDir = path.join(distDir, 'api');
  
  // Create directories
  await fs.mkdir(distDir, { recursive: true });
  await fs.mkdir(apiDir, { recursive: true });
  
  // Get all data from storage
  const articles = await storage.getPublishedArticles();
  const categories = await storage.getAllCategories();
  
  // Generate articles.json
  await fs.writeFile(
    path.join(apiDir, 'articles.json'),
    JSON.stringify(articles, null, 2)
  );
  
  // Generate categories.json
  await fs.writeFile(
    path.join(apiDir, 'categories.json'),
    JSON.stringify(categories, null, 2)
  );
  
  // Generate individual article files
  const articlesDir = path.join(apiDir, 'articles');
  await fs.mkdir(articlesDir, { recursive: true });
  
  for (const article of articles) {
    await fs.writeFile(
      path.join(articlesDir, `${article.slug}.json`),
      JSON.stringify(article, null, 2)
    );
  }
  
  console.log('Static files generated successfully!');
  console.log(`- ${articles.length} articles`);
  console.log(`- ${categories.length} categories`);
}

generateStaticFiles().catch(console.error);