# Simple GitHub Pages Deployment Guide

## If GitHub Actions Keep Failing - Use This Manual Method

### Method 1: Direct File Upload (Guaranteed to Work)

1. **Build your site locally:**
   ```bash
   node build-static.js
   ```

2. **Create a new GitHub repository**
   - Go to GitHub.com
   - Click "New repository"
   - Name it something like "my-blog"
   - Make it public
   - Don't initialize with README

3. **Upload the docs folder:**
   - In your repository, click "uploading an existing file"
   - Drag and drop ALL files from the `docs` folder
   - Commit changes

4. **Enable GitHub Pages:**
   - Go to Settings > Pages
   - Source: "Deploy from a branch"
   - Branch: "main"
   - Folder: "/ (root)"
   - Click Save

5. **Your site will be live at:**
   `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

### Method 2: Git Push (If you have Git installed)

1. **Build your site:**
   ```bash
   node build-static.js
   ```

2. **Copy docs content to root:**
   ```bash
   cp -r docs/* .
   ```

3. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Deploy blog"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

4. **Enable GitHub Pages:**
   - Settings > Pages
   - Source: "Deploy from a branch"
   - Branch: "main"
   - Folder: "/ (root)"

### Method 3: Use GitHub Desktop (User-Friendly)

1. Download GitHub Desktop
2. Clone your repository
3. Run `node build-static.js`
4. Copy files from `docs/` to the repository root
5. Commit and push through GitHub Desktop
6. Enable Pages in repository settings

## Custom Domain Setup

1. **In your repository root, create a file named `CNAME`:**
   ```
   yourdomain.com
   ```

2. **Set up DNS with your domain provider:**
   - Add CNAME record: `www` → `YOUR_USERNAME.github.io`
   - Add A records for apex domain pointing to GitHub Pages IPs

3. **In GitHub Pages settings:**
   - Add your custom domain
   - Wait for DNS check to pass
   - Enable "Enforce HTTPS"

## Content Updates

To update your blog:

1. Edit content in `client/src/lib/staticQueryClient.ts`
2. Run `node build-static.js`
3. Upload new files or push changes
4. Site updates automatically

## Files in Your Built Site

- `index.html` - Main page
- `assets/` - CSS and JavaScript files
- `.nojekyll` - Tells GitHub not to process with Jekyll
- `CNAME` - Your custom domain (if used)

This method bypasses all the GitHub Actions complexity and just uses the built files directly!