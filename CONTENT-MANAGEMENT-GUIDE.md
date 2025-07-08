# 📝 Content Management Guide for Your Blog

## How to Edit Your Website

Your website is a single HTML file (`index.html`) that contains all your content. To make changes, you'll edit this file directly on GitHub.

### 🔧 How to Edit Content

1. **Go to your GitHub repository**: https://github.com/YOUR_USERNAME/YOUR_REPO_NAME
2. **Click on `index.html`** file
3. **Click the ✏️ (Edit) button** in the top right
4. **Make your changes** (see guides below)
5. **Scroll down and click "Commit changes"**
6. **Your website updates automatically** within 1-2 minutes

## 📖 How to Edit the "Who I Am?" Section

**Find this section** in your `index.html` (around line 520):

```html
<section class="about-section" id="about">
    <div class="container">
        <div class="about-content">
            <h2>Who I Am?</h2>
            <p>Hello! I'm Geunhwa Jeong, a passionate technologist...</p>
            
            <p>I believe in the power of sharing knowledge...</p>
            
            <p>When I'm not coding or writing...</p>
            
            <div class="social-links">
                <a href="https://github.com" target="_blank">GitHub</a>
                <a href="https://www.linkedin.com/in/geunhwa-jeong-354641352" target="_blank">LinkedIn</a>
                <a href="mailto:jeonggh892@gmail.com">Email</a>
            </div>
        </div>
    </div>
</section>
```

**To edit:**
- Change the text in the `<p>` tags
- Update your social links in the `<a>` tags
- Add more paragraphs by copying the `<p>...</p>` structure

## ✍️ How to Add a New Article

**Find the articles section** (around line 418) and add your new article **before** the closing `</div>` tag:

```html
<article class="article-card" data-category="YOUR_CATEGORY">
    <div class="category-tag YOUR_CATEGORY">YOUR_CATEGORY</div>
    <h2>Your Article Title</h2>
    <div class="meta">
        <span>January 1, 2025</span>
        <span>•</span>
        <span>5 min read</span>
    </div>
    <p class="article-excerpt">Your short description here...</p>
    <div class="article-content" style="display: none;">
        <h3>Your First Section</h3>
        <p>Your content here...</p>
        
        <h3>Your Second Section</h3>
        <p>More content...</p>
        
        <ul>
            <li>Bullet point 1</li>
            <li>Bullet point 2</li>
        </ul>
    </div>
    <a href="#" class="read-more" onclick="toggleArticle(this, event)">Read more →</a>
</article>
```

## 🎨 Available Categories

Replace `YOUR_CATEGORY` with one of these:
- `technology` (blue)
- `personal` (pink)
- `research` (light blue)
- `philosophy` (green)
- `lifestyle` (purple)

## 📝 Formatting Your Article Content

Inside the `<div class="article-content">` you can use:

**Headers:**
```html
<h3>Main Section</h3>
<h4>Subsection</h4>
```

**Paragraphs:**
```html
<p>Your text here...</p>
```

**Lists:**
```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
```

**Bold text:**
```html
<strong>Important text</strong>
```

**Links:**
```html
<a href="https://example.com">Link text</a>
```

## 🔄 How to Edit Existing Articles

1. **Find the article** you want to edit in the HTML
2. **Update the content** in the `<div class="article-content">` section
3. **Change the title** in the `<h2>` tag
4. **Update the excerpt** in the `<p class="article-excerpt">` tag
5. **Commit your changes**

## 📱 Tips for Success

- **Test your changes**: After editing, visit your website to make sure it looks good
- **Keep backups**: Before making big changes, copy your HTML content somewhere safe
- **Start small**: Make one change at a time until you're comfortable
- **Use the preview**: GitHub shows a preview of your changes before committing

## 🚀 Quick Content Updates

**Change the website title:** Edit the `<title>` tag and the `<h1>` in the intro section

**Update social links:** Find the `<div class="social-links">` section and update URLs

**Change the intro message:** Edit the text in the `<section class="intro">` section

Your website will automatically update within 1-2 minutes of committing changes to GitHub!