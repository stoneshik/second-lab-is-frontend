import axios from "axios";
import { tokenService } from "~/services/tokenService";

export const api = axios.create({
    baseURL: import.meta.env.URL_HOST_API_FOR_FRONTEND || "http://localhost:8080",
    withCredentials: true,
});

// Добавляем access token в каждый запрос
api.interceptors.request.use(config => {
    const token = tokenService.get();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Обновление страницы при 401
api.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            tokenService.remove();
            globalThis.location.reload();
        }
        throw error;
    }
);
