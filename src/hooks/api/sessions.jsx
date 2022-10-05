import useAsync from "../async";
import moviesApi from "../../services/movieApi";

export default function useSessions(id) {

    const data = useAsync(() => moviesApi.getSessions(id), true);
    return data;
};