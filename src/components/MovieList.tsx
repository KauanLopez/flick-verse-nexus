import MovieCard from "./MovieCard";

interface Movie {
  id: number;
  title: string;
  poster_path?: string;
  vote_average: number;
  release_date: string;
  genre_ids?: number[];
}

interface MovieListProps {
  title: string;
  movies: Movie[];
  className?: string;
}

const MovieList = ({ title, movies, className = "" }: MovieListProps) => {
  return (
    <section className={`py-8 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
          {title}
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {movies.map((movie) => (
            <div key={movie.id} className="animate-fade-in">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieList;