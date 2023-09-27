import axios from "axios";

export const githubApi = axios.create({
    baseURL: import.meta.env.URL_API_GITHUB,
});