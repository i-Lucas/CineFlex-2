import useAsync from "../async";
import moviesApi from "../../services/movieApi";

export default function useMovies() {

    const data = useAsync(moviesApi.getMovies, true);
    return data;
};