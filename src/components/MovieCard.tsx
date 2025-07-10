import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Play } from "lucide-react";

interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    poster_path?: string;
    vote_average: number;
    release_date: string;
    genre_ids?: number[];
  };
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const posterUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750/1a1a1a/ffffff?text=No+Image";

  return (
    <Card className="group relative overflow-hidden bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-primary cursor-pointer">
      {/* Movie Poster */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={posterUrl}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-primary/20 backdrop-blur-sm rounded-full p-3 hover:bg-primary/30 transition-colors">
            <Play className="h-8 w-8 text-white fill-white" />
          </div>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="bg-black/60 text-cinema-gold border-cinema-gold/30">
            <Star className="h-3 w-3 mr-1 fill-cinema-gold text-cinema-gold" />
            {movie.vote_average.toFixed(1)}
          </Badge>
        </div>
      </div>

      {/* Movie Info */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {movie.title}
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          {new Date(movie.release_date).getFullYear()}
        </p>
      </div>
    </Card>
  );
};

export default MovieCard;