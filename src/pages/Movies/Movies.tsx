import { MovieCard } from "@/components/MovieCard/MovieCard";
import { useGetMoviesQuery } from "@/redux/api/api";
import { TMovie } from "@/types";

export default function Movies() {
  const { data, isLoading } = useGetMoviesQuery({});
  if (isLoading)
    return (
      <div className="text-2xl text-yellow-400 flex justify-center items-center">
        Loading...
      </div>
    );
  const { data: Movies } = data;
  return (
    <div className="container mx-auto">
      <h1>All Movies</h1>
      <div className="grid grid-cols-4 gap-5 my-4">
        {Movies.map((movie: TMovie) => (
          <MovieCard key={movie?._id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
