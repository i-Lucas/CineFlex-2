import api from "./api";

async function getMovies() {

    const response = await api.get("/movies");
    return response.data;
};

async function getSessions(id) {

    const response = await api.get(`/movies/${id}/showtimes`);
    return response.data;
};

async function getSeats(session) {

    const response = await api.get(`/showtimes/${session}/seats`);
    return response.data;
};

async function bookSeats(data) {

    const response = await api.post(`/seats/book-many`, data);
    return response.data;
};

const moviesApi = {

    getMovies,
    getSessions,
    getSeats,
    bookSeats
};

export default moviesApi;