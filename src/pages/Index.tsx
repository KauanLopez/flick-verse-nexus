import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MovieList from "@/components/MovieList";
import { popularMovies, nowPlayingMovies, trendingMovies } from "@/data/mockMovies";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      
      <main className="relative z-10">
        <MovieList 
          title="Trending Now" 
          movies={trendingMovies}
          className="bg-gradient-to-b from-transparent to-background/50"
        />
        
        <MovieList 
          title="Popular Movies" 
          movies={popularMovies}
        />
        
        <MovieList 
          title="Now Playing" 
          movies={nowPlayingMovies}
        />
      </main>

      {/* Footer placeholder for ads */}
      <footer className="bg-card border-t border-border/50 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4 p-8 bg-muted/20 rounded-lg border-2 border-dashed border-muted-foreground/20">
            <p className="text-muted-foreground">Advertisement Space</p>
            <p className="text-sm text-muted-foreground/60">Google AdSense integration ready</p>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p>&copy; 2024 CinemaStream. All rights reserved.</p>
            <p className="mt-2">Built with React, TypeScript, and Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;