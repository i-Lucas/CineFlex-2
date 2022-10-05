import useAsync from "../async";
import moviesApi from "../../services/movieApi";

function getSeats(session) {

    const data = useAsync(() => moviesApi.getSeats(session), true);
    return data;
};

function bookSeats(_data) {

    const data = useAsync(() => moviesApi.bookSeats(_data), true);
    return data;
};

const useSeats = {
    getSeats,
    bookSeats
};

export default useSeats;