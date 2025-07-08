import { articles, categories, type Article, type InsertArticle, type Category, type InsertCategory } from "@shared/schema";

// User types for demo purposes
export interface User {
  id: number;
  username: string;
  email: string;
}

export interface InsertUser {
  username: string;
  email: string;
}

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Articles
  getAllArticles(): Promise<Article[]>;
  getPublishedArticles(): Promise<Article[]>;
  getArticleBySlug(slug: string): Promise<Article | undefined>;
  getArticlesByCategory(category: string): Promise<Article[]>;
  searchArticles(query: string): Promise<Article[]>;
  createArticle(article: InsertArticle): Promise<Article>;
  updateArticle(id: number, article: Partial<InsertArticle>): Promise<Article | undefined>;
  deleteArticle(id: number): Promise<boolean>;
  
  // Categories
  getAllCategories(): Promise<Category[]>;
  getCategoryBySlug(slug: string): Promise<Category | undefined>;
  createCategory(category: InsertCategory): Promise<Category>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private articles: Map<number, Article>;
  private categories: Map<number, Category>;
  private currentUserId: number;
  private currentArticleId: number;
  private currentCategoryId: number;

  constructor() {
    this.users = new Map();
    this.articles = new Map();
    this.categories = new Map();
    this.currentUserId = 1;
    this.currentArticleId = 1;
    this.currentCategoryId = 1;
    
    // Initialize with default categories
    this.initializeDefaultCategories();
    this.initializeSampleArticles();
  }

  private initializeDefaultCategories() {
    const defaultCategories: InsertCategory[] = [
      { name: "Technology", slug: "technology", description: "Tech insights and trends" },
      { name: "Philosophy", slug: "philosophy", description: "Philosophical reflections" },
      { name: "Personal", slug: "personal", description: "Personal experiences and thoughts" },
      { name: "Research", slug: "research", description: "Research findings and analysis" },
    ];

    defaultCategories.forEach(category => {
      const newCategory: Category = { 
        ...category, 
        id: this.currentCategoryId++,
        description: category.description || null
      };
      this.categories.set(newCategory.id, newCategory);
    });
  }

  private initializeSampleArticles() {
    const sampleArticles: InsertArticle[] = [
      {
        title: "The Future of Web Development: Trends and Predictions",
        slug: "future-of-web-development",
        content: "# The Future of Web Development\n\nWeb development continues to evolve at a rapid pace...",
        excerpt: "Exploring the evolving landscape of web development, from emerging frameworks to new paradigms that are shaping how we build digital experiences.",
        category: "technology",
        publishedAt: new Date("2024-12-15"),
        readTime: 5,
        isPublished: true,
      },
      {
        title: "Reflections on Digital Ethics and Privacy",
        slug: "digital-ethics-privacy",
        content: "# Digital Ethics and Privacy\n\nIn our increasingly connected world...",
        excerpt: "In an increasingly connected world, how do we balance technological advancement with fundamental human rights and privacy concerns?",
        category: "philosophy",
        publishedAt: new Date("2024-12-08"),
        readTime: 8,
        isPublished: true,
      },
      {
        title: "Lessons from a Year of Remote Work",
        slug: "remote-work-lessons",
        content: "# Remote Work Lessons\n\nAfter a full year of remote work...",
        excerpt: "Personal insights and practical tips from navigating the challenges and opportunities of remote work in the modern era.",
        category: "personal",
        publishedAt: new Date("2024-11-28"),
        readTime: 6,
        isPublished: true,
      },
      {
        title: "Understanding Machine Learning: A Beginner's Guide",
        slug: "machine-learning-guide",
        content: "# Machine Learning for Beginners\n\nMachine learning can seem intimidating...",
        excerpt: "Demystifying artificial intelligence and machine learning concepts through practical examples and real-world applications.",
        category: "research",
        publishedAt: new Date("2024-11-15"),
        readTime: 12,
        isPublished: true,
      },
    ];

    sampleArticles.forEach(article => {
      const newArticle: Article = { 
        ...article, 
        id: this.currentArticleId++,
        isPublished: article.isPublished ?? true
      };
      this.articles.set(newArticle.id, newArticle);
    });
  }

  // User methods (existing)
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Article methods
  async getAllArticles(): Promise<Article[]> {
    return Array.from(this.articles.values()).sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  }

  async getPublishedArticles(): Promise<Article[]> {
    return Array.from(this.articles.values())
      .filter(article => article.isPublished)
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }

  async getArticleBySlug(slug: string): Promise<Article | undefined> {
    return Array.from(this.articles.values()).find(article => article.slug === slug);
  }

  async getArticlesByCategory(category: string): Promise<Article[]> {
    return Array.from(this.articles.values())
      .filter(article => article.category === category && article.isPublished)
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }

  async searchArticles(query: string): Promise<Article[]> {
    const searchTerm = query.toLowerCase();
    return Array.from(this.articles.values())
      .filter(article => 
        article.isPublished && (
          article.title.toLowerCase().includes(searchTerm) ||
          article.excerpt.toLowerCase().includes(searchTerm) ||
          article.content.toLowerCase().includes(searchTerm)
        )
      )
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }

  async createArticle(insertArticle: InsertArticle): Promise<Article> {
    const id = this.currentArticleId++;
    const article: Article = { 
      ...insertArticle, 
      id,
      isPublished: insertArticle.isPublished ?? false
    };
    this.articles.set(id, article);
    return article;
  }

  async updateArticle(id: number, updates: Partial<InsertArticle>): Promise<Article | undefined> {
    const article = this.articles.get(id);
    if (!article) return undefined;
    
    const updatedArticle: Article = { 
      ...article, 
      ...updates,
      isPublished: updates.isPublished ?? article.isPublished
    };
    this.articles.set(id, updatedArticle);
    return updatedArticle;
  }

  async deleteArticle(id: number): Promise<boolean> {
    return this.articles.delete(id);
  }

  // Category methods
  async getAllCategories(): Promise<Category[]> {
    return Array.from(this.categories.values());
  }

  async getCategoryBySlug(slug: string): Promise<Category | undefined> {
    return Array.from(this.categories.values()).find(category => category.slug === slug);
  }

  async createCategory(insertCategory: InsertCategory): Promise<Category> {
    const id = this.currentCategoryId++;
    const category: Category = { 
      ...insertCategory, 
      id,
      description: insertCategory.description || null
    };
    this.categories.set(id, category);
    return category;
  }
}

export const storage = new MemStorage();
