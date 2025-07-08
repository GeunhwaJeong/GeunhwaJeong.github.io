import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Search, User, Newspaper, Mail, Github, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArticleCard } from "@/components/ArticleCard";
import type { Article, Category } from "@shared/schema";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const { data: articles = [], isLoading: articlesLoading } = useQuery<Article[]>({
    queryKey: ["/api/articles", { published: true }],
  });

  const { data: categories = [] } = useQuery<Category[]>({
    queryKey: ["/api/categories"],
  });

  const filteredArticles = useMemo(() => {
    let filtered = articles;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [articles, selectedCategory, searchQuery]);

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is handled in real-time via useMemo
  };

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <section id="home" className="mb-16">
        <div className="text-center py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Geunhwa Jeong's Website
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Welcome to my personal blog where I share thoughts, insights, and explorations across various topics.
          </p>
        </div>
      </section>

      {/* Who I am Section */}
      <section id="about" className="mb-16">
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 border-none">
          <CardContent className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center">
              <User className="mr-3 text-secondary" size={32} />
              Who I am?
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                This is where your personal introduction will go. You can write about your background, interests, professional journey, and what drives you to write and share your thoughts with the world.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Feel free to include your philosophy, current projects, and what readers can expect from your blog. This section helps visitors understand who you are and what makes your perspective unique.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Articles Section */}
      <section id="articles" className="mb-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h2 className="text-3xl font-bold text-primary mb-4 md:mb-0 flex items-center">
            <Newspaper className="mr-3 text-secondary" size={32} />
            Articles
          </h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => handleCategoryFilter("all")}
              className="rounded-full"
            >
              All
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.slug ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategoryFilter(category.slug)}
                className="rounded-full"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-3 border-border"
            />
          </form>
        </div>

        {/* Articles Grid */}
        <div className="grid gap-6 md:gap-8">
          {articlesLoading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary mx-auto"></div>
              <p className="text-muted-foreground mt-4">Loading articles...</p>
            </div>
          ) : filteredArticles.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">
                {searchQuery || selectedCategory !== "all" 
                  ? "No articles found matching your criteria." 
                  : "No articles published yet."}
              </p>
            </div>
          ) : (
            filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="mb-16">
        <Card className="blog-gradient text-white border-none">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg mb-6 opacity-90">
              Get notified when I publish new articles and insights
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white text-gray-900 border-none"
                required
              />
              <Button type="submit" variant="secondary" className="bg-white text-secondary hover:bg-gray-100">
                Subscribe
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 rounded-2xl">
        <div className="p-8 md:p-12 text-center">
          <h3 className="text-lg font-semibold text-primary mb-4">Geunhwa Jeong</h3>
          <p className="text-muted-foreground mb-6">
            Sharing thoughts, insights, and explorations through writing
          </p>
          
          <div className="flex justify-center space-x-6 mb-6">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-muted-foreground hover:text-secondary"
              onClick={() => window.open('https://www.linkedin.com/in/geunhwa-jeong-354641352', '_blank')}
            >
              <Linkedin size={20} />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-muted-foreground hover:text-secondary"
              onClick={() => window.open('https://github.com', '_blank')}
            >
              <Github size={20} />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-muted-foreground hover:text-secondary"
              onClick={() => window.open('mailto:jeonggh892@gmail.com', '_blank')}
            >
              <Mail size={20} />
            </Button>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © 2024 Geunhwa Jeong. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
