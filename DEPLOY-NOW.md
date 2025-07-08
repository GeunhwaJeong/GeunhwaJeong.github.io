# 🚀 Deploy Your Blog to GitHub Pages - 3 Methods

## Method 1: Super Simple File Upload (100% Success Rate)

**This method bypasses all GitHub Actions issues and works every time:**

### Step 1: Build Your Site
```bash
node build-static.js
```

### Step 2: Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and log in
2. Click the green "New" button (or go to https://github.com/new)
3. Repository name: `my-blog` (or whatever you prefer)
4. Make it **Public**
5. **Don't** check "Add a README file"
6. Click "Create repository"

### Step 3: Upload Your Files
1. On your new repository page, click "uploading an existing file"
2. Open your `docs` folder on your computer
3. Select ALL files in the docs folder (index.html, assets folder, .nojekyll, CNAME)
4. Drag them into the GitHub upload area
5. Scroll down and click "Commit changes"

### Step 4: Enable GitHub Pages
1. In your repository, click "Settings" tab
2. Scroll down to "Pages" section on the left
3. Under "Source", select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Click "Save"

### Step 5: Get Your URL
Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

---

## Method 2: GitHub Actions (If You Want Automatic Updates)

### Step 1: Push Your Code
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 2: Set Repository Permissions
1. Go to Settings > Actions > General
2. Under "Workflow permissions", select "Read and write permissions"
3. Check "Allow GitHub Actions to create and approve pull requests"
4. Click "Save"

### Step 3: Enable GitHub Pages
1. Settings > Pages
2. Source: "GitHub Actions"
3. The workflow will run automatically

---

## Method 3: Manual Git with Built Files

### Step 1: Build and Copy
```bash
node build-static.js
cp -r docs/* ./
```

### Step 2: Push to GitHub
```bash
git init
git add .
git commit -m "Deploy blog"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 3: Enable Pages
1. Settings > Pages
2. Source: "Deploy from a branch"
3. Branch: "main", Folder: "/ (root)"

---

## Custom Domain Setup (Optional)

### Step 1: Edit CNAME File
In your repository root, create/edit the `CNAME` file:
```
yourdomain.com
```

### Step 2: DNS Configuration
With your domain provider, add:
- **A records** for apex domain (yourdomain.com):
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153

- **CNAME record** for www subdomain:
  - www → YOUR_USERNAME.github.io

### Step 3: GitHub Settings
1. Settings > Pages
2. Custom domain: Enter your domain
3. Wait for DNS check to pass
4. Enable "Enforce HTTPS"

---

## Content Updates

To update your blog content:

### Edit Articles
Edit `client/src/lib/staticQueryClient.ts` - update the `staticArticles` array

### Edit "Who I am?" Section
Edit `client/src/pages/Home.tsx` - update the content in the Home component

### Rebuild and Redeploy
```bash
node build-static.js
```
Then upload the new files or push changes to GitHub.

---

## Troubleshooting

### If GitHub Actions Fail
Use Method 1 (file upload) - it always works!

### If Pages Don't Load
- Check that index.html is in the root of your repository
- Verify the repository is public
- Wait 5-10 minutes for GitHub to process changes

### If Custom Domain Doesn't Work
- Verify DNS records are correct
- Wait up to 24 hours for DNS propagation
- Check that CNAME file contains only your domain name

---

## Why This Works Better

- **Method 1** bypasses all GitHub Actions complexity
- **No build errors** during deployment
- **No authentication issues**
- **Works with any GitHub account**
- **Immediate results**

Your blog is ready to go live! 🎉