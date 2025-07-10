import { Button } from "@/components/ui/button";
import { Play, Info } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="Featured Movie"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in">
            Welcome to
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              CinemaStream
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Discover thousands of movies and TV shows. Stream the latest blockbusters and timeless classics.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="xl" className="group">
              <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              Start Watching
            </Button>
            
            <Button variant="outline" size="xl" className="group border-white/30 text-white hover:bg-white/10">
              <Info className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              Learn More
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-cinema-gold">10K+</div>
              <div className="text-sm text-gray-300">Movies</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-cinema-gold">5K+</div>
              <div className="text-sm text-gray-300">TV Shows</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-cinema-gold">4K</div>
              <div className="text-sm text-gray-300">Ultra HD</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;