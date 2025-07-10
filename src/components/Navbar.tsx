import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Film, User, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Film className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              CinemaStream
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Movies
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              TV Shows
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Trending
            </a>
          </div>

          {/* Search and User Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden sm:flex items-center">
              {isSearchOpen ? (
                <div className="flex items-center space-x-2 animate-slide-up">
                  <Input
                    placeholder="Search movies..."
                    className="w-64 bg-secondary/50 border-primary/30 focus:border-primary"
                    autoFocus
                    onBlur={() => setIsSearchOpen(false)}
                  />
                </div>
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(true)}
                  className="hover:text-primary"
                >
                  <Search className="h-5 w-5" />
                </Button>
              )}
            </div>

            {/* Mobile Search */}
            <Button
              variant="ghost"
              size="icon"
              className="sm:hidden hover:text-primary"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* User Profile */}
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <User className="h-5 w-5" />
            </Button>

            {/* Mobile Menu */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:text-primary"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;