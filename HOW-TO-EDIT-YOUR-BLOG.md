# 📝 Easy Guide: How to Edit Your Blog

## 🎯 Quick Start

Your entire blog is in one file: `index.html`. To edit it:

1. **Go to your GitHub repository** (where your website files are)
2. **Click on `index.html`**
3. **Click the ✏️ Edit button**
4. **Make your changes** (see examples below)
5. **Scroll down and click "Commit changes"**
6. **Your website updates automatically** in 1-2 minutes!

## ✍️ How to Write a New Article

**Step 1: Find where to add it**
Look for this line in your HTML (around line 417):
```html
<div class="articles" id="articlesContainer">
```

**Step 2: Add your new article**
Copy this template and paste it **after** the opening `<div class="articles"...>` tag:

```html
<article class="article-card" data-category="technology">
    <div class="category-tag technology">Technology</div>
    <h2>Your Article Title Here</h2>
    <div class="meta">
        <span>January 8, 2025</span>
    </div>
    <p class="article-excerpt">Write a short description of your article here. This appears on the main page.</p>
    <div class="article-content" style="display: none;">
        <h3>Your First Section</h3>
        <p>Write your content here. You can write as much as you want!</p>
        
        <h3>Another Section</h3>
        <p>Add more paragraphs, thoughts, and ideas.</p>
        
        <p>You can also add lists:</p>
        <ul>
            <li>Point 1</li>
            <li>Point 2</li>
            <li>Point 3</li>
        </ul>
        
        <p>Or make text <strong>bold</strong> for emphasis.</p>
    </div>
    <a href="#" class="read-more" onclick="toggleArticle(this, event)">Read more →</a>
</article>
```

**Step 3: Customize your article**
- Change `"Your Article Title Here"` to your actual title
- Update the date to today's date
- Pick a category: `technology`, `personal`, `research`, `philosophy`, or `lifestyle`
- Write your short description in the `article-excerpt` section
- Write your full article in the `article-content` section

## 🎨 Available Categories

Change both places where it says `technology` to one of these:

- `technology` (blue color)
- `personal` (pink color)
- `research` (light blue color)
- `philosophy` (green color)
- `lifestyle` (purple color)

## 📝 How to Format Your Writing

**Headers for sections:**
```html
<h3>Main Section Title</h3>
<h4>Smaller Section Title</h4>
```

**Regular paragraphs:**
```html
<p>Your text goes here.</p>
```

**Bold text:**
```html
<strong>Important text</strong>
```

**Lists:**
```html
<ul>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ul>
```

**Links:**
```html
<a href="https://example.com">Click here</a>
```

## 👤 How to Update "Who I Am?" Section

**Find this section** (around line 540):
```html
<h2>Who I Am?</h2>
<p>Hello! I'm Geunhwa Jeong...</p>
```

**Replace the text** in the `<p>` tags with your own story:
```html
<p>Write about yourself here!</p>
<p>Add more paragraphs about your background, interests, and goals.</p>
```

## 🔗 How to Update Your Social Links

**Find this section** (around line 550):
```html
<div class="social-links">
    <a href="https://github.com" target="_blank">GitHub</a>
    <a href="https://www.linkedin.com/in/geunhwa-jeong-354641352" target="_blank">LinkedIn</a>
    <a href="mailto:jeonggh892@gmail.com">Email</a>
</div>
```

**Update the links** with your actual URLs:
- Replace `https://github.com` with your GitHub profile
- Replace the LinkedIn URL with your LinkedIn profile
- Replace the email with your actual email

## 📱 Quick Tips

- **Test your changes**: After editing, visit your website to see how it looks
- **Save often**: Make small changes and commit them frequently
- **Keep it simple**: Start with basic formatting and add more as you learn
- **Preview before committing**: GitHub shows you a preview of your changes

## 🚀 Your Website Updates Automatically!

Every time you commit changes to your `index.html` file, your website at `https://geunhwajeong.github.io/` updates automatically within 1-2 minutes. No need to do anything else!

## 🎯 Example: Adding Your First Article

Let's say you want to write about "My First Day Learning Code":

1. **Use the template above**
2. **Change the title**: `<h2>My First Day Learning Code</h2>`
3. **Pick category**: `data-category="personal"` and `<div class="category-tag personal">Personal</div>`
4. **Write your story** in the `article-content` section
5. **Commit and your article goes live!**

Your blog is now ready for you to write and share your thoughts with the world!