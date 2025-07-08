import { QueryClient } from "@tanstack/react-query";
import type { Article, Category } from "@shared/schema";

// Static data for GitHub Pages deployment
const staticArticles: Article[] = [
  {
    id: 1,
    title: "The Future of Web Development: Trends and Predictions",
    slug: "future-of-web-development",
    content: "# The Future of Web Development\n\nWeb development continues to evolve at a rapid pace. From the rise of server-side rendering to the growing importance of Web Components, the landscape is constantly shifting.\n\n## Key Trends to Watch\n\n### 1. Framework Evolution\nModern frameworks are becoming more performant and developer-friendly. React, Vue, and Angular continue to innovate with better state management, improved rendering, and enhanced developer experience.\n\n### 2. Performance Optimization\nCore Web Vitals and performance metrics are becoming increasingly important. Developers are focusing on:\n- Lazy loading and code splitting\n- Image optimization\n- Efficient caching strategies\n- Minimizing JavaScript bundle sizes\n\n### 3. Developer Experience\nThe developer experience is paramount. Tools like hot module replacement, TypeScript integration, and improved debugging capabilities are becoming standard.\n\n## Looking Ahead\n\nThe future of web development is bright, with exciting developments in areas like WebAssembly, Progressive Web Apps, and edge computing. As we move forward, the focus will remain on creating fast, accessible, and user-friendly web experiences.",
    excerpt: "Exploring the evolving landscape of web development, from emerging frameworks to new paradigms that are shaping how we build digital experiences.",
    category: "technology",
    publishedAt: new Date("2024-12-15"),
    readTime: 5,
    isPublished: true,
  },
  {
    id: 2,
    title: "Reflections on Digital Ethics and Privacy",
    slug: "digital-ethics-privacy",
    content: "# Digital Ethics and Privacy\n\nIn our increasingly connected world, the intersection of technology and ethics has become more critical than ever. As we build and use digital tools, we must consider their impact on society, privacy, and human well-being.\n\n## The Privacy Paradox\n\nWe live in an era where convenience often comes at the cost of privacy. Every click, search, and interaction generates data that can be collected, analyzed, and monetized. This raises fundamental questions about:\n\n- **Consent**: Are users truly informed about what data is collected?\n- **Control**: Do individuals have meaningful control over their personal information?\n- **Transparency**: Are companies clear about their data practices?\n\n## Ethical Design Principles\n\nAs developers and designers, we have a responsibility to create technology that respects human dignity and privacy. This includes:\n\n### 1. Privacy by Design\nBuilding privacy considerations into the architecture of systems from the ground up, not as an afterthought.\n\n### 2. Minimization\nCollecting only the data that is absolutely necessary for the intended purpose.\n\n### 3. User Agency\nGiving users meaningful choices about how their data is used and shared.\n\n## The Path Forward\n\nThe challenge is not to abandon technology, but to develop it responsibly. This requires ongoing dialogue between technologists, ethicists, policymakers, and society at large.\n\nWe must strive to create digital experiences that enhance human flourishing while respecting fundamental rights and values.",
    excerpt: "In an increasingly connected world, how do we balance technological advancement with fundamental human rights and privacy concerns?",
    category: "philosophy",
    publishedAt: new Date("2024-12-08"),
    readTime: 8,
    isPublished: true,
  },
  {
    id: 3,
    title: "Lessons from a Year of Remote Work",
    slug: "remote-work-lessons",
    content: "# Remote Work Lessons\n\nAfter a full year of remote work, I've learned valuable lessons about productivity, communication, and work-life balance. Here are the key insights that have shaped my approach to distributed work.\n\n## What Works\n\n### 1. Structured Communication\nClear, asynchronous communication becomes essential. Tools like Slack, Discord, and project management platforms help maintain team cohesion.\n\n### 2. Dedicated Workspace\nHaving a specific area for work helps maintain boundaries between personal and professional life.\n\n### 3. Regular Check-ins\nScheduled video calls and team meetings become more important than ever for maintaining relationships and alignment.\n\n## Challenges and Solutions\n\n### Isolation\n**Problem**: Working alone can lead to feelings of isolation and disconnection.\n**Solution**: Regular virtual coffee chats, team-building activities, and maintaining social connections outside of work.\n\n### Overwork\n**Problem**: Without clear boundaries, it's easy to work longer hours.\n**Solution**: Setting specific start and end times, using time-tracking tools, and taking regular breaks.\n\n### Communication Overhead\n**Problem**: More effort is required to communicate effectively in a remote environment.\n**Solution**: Developing clear communication protocols and using the right tools for different types of conversations.\n\n## Key Takeaways\n\n1. **Flexibility is Key**: Remote work allows for better work-life integration when done thoughtfully.\n2. **Trust Matters**: Remote work requires high levels of trust between team members and managers.\n3. **Technology Enables**: The right tools and infrastructure are essential for remote work success.\n4. **Culture Adapts**: Company culture can thrive in remote environments with intentional effort.\n\nRemote work isn't just about working from home—it's about reimagining how we collaborate and create value in the digital age.",
    excerpt: "Personal insights and practical tips from navigating the challenges and opportunities of remote work in the modern era.",
    category: "personal",
    publishedAt: new Date("2024-11-28"),
    readTime: 6,
    isPublished: true,
  },
  {
    id: 4,
    title: "Understanding Machine Learning: A Beginner's Guide",
    slug: "machine-learning-guide",
    content: "# Machine Learning for Beginners\n\nMachine learning can seem intimidating, but at its core, it's about teaching computers to learn patterns from data. This guide will help you understand the fundamentals without getting lost in complex mathematics.\n\n## What is Machine Learning?\n\nMachine learning is a subset of artificial intelligence that enables computers to learn and improve from experience without being explicitly programmed for every scenario.\n\n## Types of Machine Learning\n\n### 1. Supervised Learning\nThe algorithm learns from labeled examples. Like teaching a child to recognize animals by showing them pictures with labels.\n\n**Examples:**\n- Email spam detection\n- Image recognition\n- Price prediction\n\n### 2. Unsupervised Learning\nThe algorithm finds patterns in data without labeled examples. Like letting a child group toys by color without telling them what color is.\n\n**Examples:**\n- Customer segmentation\n- Anomaly detection\n- Data compression\n\n### 3. Reinforcement Learning\nThe algorithm learns through trial and error, receiving rewards or penalties for actions.\n\n**Examples:**\n- Game playing (chess, Go)\n- Robot navigation\n- Autonomous vehicles\n\n## Common Algorithms\n\n### Linear Regression\nPredicts continuous values by finding the best line through data points.\n\n### Decision Trees\nMakes decisions by asking yes/no questions in a tree-like structure.\n\n### Neural Networks\nInspired by the human brain, these networks can learn complex patterns.\n\n## Getting Started\n\n1. **Learn the Basics**: Start with fundamental concepts and simple examples\n2. **Practice with Tools**: Use beginner-friendly platforms like Scratch for Machine Learning\n3. **Work on Projects**: Apply what you learn to real-world problems\n4. **Join Communities**: Connect with other learners and experts\n\n## Real-World Applications\n\nMachine learning is everywhere:\n- **Healthcare**: Diagnostic imaging, drug discovery\n- **Finance**: Fraud detection, algorithmic trading\n- **Entertainment**: Recommendation systems, content creation\n- **Transportation**: Route optimization, autonomous vehicles\n\n## The Future\n\nAs machine learning continues to evolve, it will become even more integrated into our daily lives. Understanding these concepts will be increasingly valuable for everyone, not just technical professionals.\n\nRemember: you don't need to be a mathematician to understand and benefit from machine learning. Start with the basics, stay curious, and keep learning!",
    excerpt: "Demystifying artificial intelligence and machine learning concepts through practical examples and real-world applications.",
    category: "research",
    publishedAt: new Date("2024-11-15"),
    readTime: 12,
    isPublished: true,
  },
];

const staticCategories: Category[] = [
  { id: 1, name: "Technology", slug: "technology", description: "Tech insights and trends" },
  { id: 2, name: "Philosophy", slug: "philosophy", description: "Philosophical reflections" },
  { id: 3, name: "Personal", slug: "personal", description: "Personal experiences and thoughts" },
  { id: 4, name: "Research", slug: "research", description: "Research findings and analysis" },
];

// Static query functions
async function fetchStaticArticles(): Promise<Article[]> {
  return staticArticles;
}

async function fetchStaticCategories(): Promise<Category[]> {
  return staticCategories;
}

async function fetchStaticArticle(slug: string): Promise<Article | null> {
  const article = staticArticles.find(a => a.slug === slug);
  return article || null;
}

// Create static query client
export const staticQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        const [endpoint, params] = queryKey as [string, any];
        
        if (endpoint === '/api/articles') {
          const articles = await fetchStaticArticles();
          
          if (params?.published) {
            return articles.filter(a => a.isPublished);
          }
          
          return articles;
        }
        
        if (endpoint === '/api/categories') {
          return await fetchStaticCategories();
        }
        
        if (endpoint.startsWith('/api/articles/')) {
          const slug = endpoint.split('/').pop();
          return await fetchStaticArticle(slug!);
        }
        
        throw new Error(`Unknown endpoint: ${endpoint}`);
      },
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});