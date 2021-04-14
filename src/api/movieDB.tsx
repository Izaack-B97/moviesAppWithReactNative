import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '69d12c7492581698a556971937feaaaa',
        language: 'es-ES'
    }
});

export default movieDB;