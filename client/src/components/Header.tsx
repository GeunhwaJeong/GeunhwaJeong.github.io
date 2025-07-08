import { useTheme } from "./ThemeProvider";
import { Moon, Sun, Menu } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [location] = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Who I am", href: "#about" },
    { name: "Articles", href: "#articles" },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <h1 className="text-xl font-bold text-primary hover:text-secondary transition-colors cursor-pointer">
                Geunhwa Jeong's Website
              </h1>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              item.href.startsWith("#") ? (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-muted-foreground hover:text-secondary transition-colors"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                >
                  <a className="text-muted-foreground hover:text-secondary transition-colors">
                    {item.name}
                  </a>
                </Link>
              )
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-secondary"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    item.href.startsWith("#") ? (
                      <button
                        key={item.name}
                        onClick={() => handleNavClick(item.href)}
                        className="text-muted-foreground hover:text-secondary transition-colors text-lg text-left"
                      >
                        {item.name}
                      </button>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                      >
                        <a className="text-muted-foreground hover:text-secondary transition-colors text-lg">
                          {item.name}
                        </a>
                      </Link>
                    )
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
