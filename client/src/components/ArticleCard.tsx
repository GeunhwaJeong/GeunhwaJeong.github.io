import { format } from "date-fns";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Article } from "@shared/schema";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
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

  return (
    <Card className="blog-card-hover">
      <CardContent className="p-6">
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
          <span className="font-medium">
            {format(new Date(article.publishedAt), "MMM dd, yyyy")}
          </span>
          <Badge className={`blog-category-badge ${getCategoryColor(article.category)}`}>
            {article.category}
          </Badge>
        </div>
        
        <h3 className="text-xl font-semibold text-foreground mb-3 hover:text-secondary transition-colors">
          <Link href={`/article/${article.slug}`}>
            <a>{article.title}</a>
          </Link>
        </h3>
        
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-1" />
            <span>{article.readTime} min read</span>
          </div>
          <Link href={`/article/${article.slug}`}>
            <a className="text-secondary hover:text-secondary/80 font-medium text-sm transition-colors inline-flex items-center">
              Read more
              <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
