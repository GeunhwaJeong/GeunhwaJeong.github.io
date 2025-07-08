# Deploying to GitHub Pages

This guide will help you deploy your personal blog to GitHub Pages with your custom domain.

## Prerequisites

1. A GitHub account
2. Node.js installed on your computer
3. Git installed on your computer

## Step 1: Prepare Your Repository

1. Create a new repository on GitHub (can be private or public)
2. Clone this project to your computer
3. Navigate to the project directory

## Step 2: Build the Static Site

Run the following command to build your static site:

```bash
node build-static.js
```

This will create a `docs` folder with your compiled website.

## Step 3: Push to GitHub

1. Initialize git repository (if not already done):
```bash
git init
git add .
git commit -m "Initial commit"
```

2. Add your GitHub repository as origin:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

3. Push to GitHub:
```bash
git push -u origin main
```

## Step 4: Enable GitHub Pages

**Option 1: Automatic Deployment with GitHub Actions (Recommended)**

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "GitHub Actions"
5. The workflow will automatically deploy when you push to main branch

**Option 2: Manual Deployment (If Actions fail)**

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"

**Important**: Make sure your repository has the following permissions:
- Go to Settings > Actions > General
- Under "Workflow permissions", select "Read and write permissions"
- Check "Allow GitHub Actions to create and approve pull requests"
- Click "Save"

## Step 5: Set Up Custom Domain (Optional)

If you want to use a custom domain:

1. **Edit the CNAME file**: 
   - Open `docs/CNAME` file
   - Uncomment and replace `yourdomain.com` with your actual domain
   - Example: `blog.yourname.com`

2. **Configure GitHub Pages**:
   - In the "Pages" settings, add your custom domain in the "Custom domain" field
   - Wait for DNS check to complete

3. **Set up DNS records** with your domain provider:
   - For apex domain (yourname.com): Create A records pointing to GitHub Pages IPs
   - For subdomain (blog.yourname.com): Create CNAME record pointing to your-username.github.io

4. **Enable HTTPS**: GitHub will automatically provision SSL certificate

## Step 6: Update Content

To update your blog content:

1. Edit the articles in `client/src/lib/staticQueryClient.ts`
2. Modify the "Who I am?" section in `client/src/pages/Home.tsx`
3. Run `node build-static.js` to rebuild
4. Commit and push changes to GitHub

## Your Live Site

Once deployed, your site will be available at:
- Default: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`
- Custom domain: `https://your-custom-domain.com`

## Features Included

- ✅ Responsive design with dark/light themes
- ✅ Article categorization and search
- ✅ Markdown content support
- ✅ SEO optimization
- ✅ Social media links
- ✅ Mobile-friendly navigation

## Customization

- **Add new articles**: Edit `staticQueryClient.ts`
- **Update personal info**: Edit `Home.tsx`
- **Change styling**: Edit CSS files in `client/src/index.css`
- **Add new categories**: Update the categories array in `staticQueryClient.ts`

Your blog is now ready for GitHub Pages! 🎉