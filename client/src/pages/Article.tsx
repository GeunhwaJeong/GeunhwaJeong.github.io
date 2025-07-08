import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { ArrowLeft, User } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { parseMarkdown } from "@/lib/markdown";
import type { Article } from "@shared/schema";

export default function Article() {
  const { slug } = useParams<{ slug: string }>();

  const { data: article, isLoading, error } = useQuery<Article>({
    queryKey: ["/api/articles", slug],
    queryFn: async () => {
      const response = await fetch(`/api/articles/${slug}`);
      if (!response.ok) {
        throw new Error("Article not found");
      }
      return response.json();
    },
  });

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "technology":
        return "blog-category-technology";
      case "philosophy":
        return "blog-category-philosophy";
      case "personal":
        return "blog-category-personal";
      case "research":
        return "blog-category-research";
      default:
        return "blog-category-technology";
    }
  };

  if (isLoading) {
    return (
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary mx-auto"></div>
          <p className="text-muted-foreground mt-4">Loading article...</p>
        </div>
      </main>
    );
  }

  if (error || !article) {
    return (
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="max-w-md mx-auto">
          <CardContent className="pt-6 text-center">
            <div className="text-red-500 mb-4">
              <User size={48} className="mx-auto" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Article Not Found</h1>
            <p className="text-muted-foreground mb-4">
              The article you're looking for doesn't exist or has been removed.
            </p>
            <Link href="/">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back button */}
      <div className="mb-8">
        <Link href="/">
          <Button variant="ghost" className="text-muted-foreground hover:text-secondary">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Articles
          </Button>
        </Link>
      </div>

      {/* Article header */}
      <header className="mb-8">
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <span className="font-medium">
            {format(new Date(article.publishedAt), "MMMM dd, yyyy")}
          </span>
          <Badge className={`blog-category-badge ${getCategoryColor(article.category)}`}>
            {article.category}
          </Badge>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          {article.title}
        </h1>
      </header>

      {/* Article content */}
      <article className="prose prose-lg dark:prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: parseMarkdown(article.content) }} />
      </article>

      {/* Article footer */}
      <footer className="mt-12 pt-8 border-t border-border">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Thanks for reading! If you enjoyed this article, feel free to share it.
          </p>
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Articles
            </Button>
          </Link>
        </div>
      </footer>
    </main>
  );
}
