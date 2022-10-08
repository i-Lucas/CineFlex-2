import axios from "axios";

const instance = axios.create({
    baseURL: "https://mock-api.driven.com.br/api/v5/cineflex"
});

export default instance;