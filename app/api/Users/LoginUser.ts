import { api } from "~/lib/axios";
import { isErrorMessage } from "~/types/ErrorMessage";

export interface ParamsForLoginUser {
    login: string;
    password: string;
}

export const loginUser = async (params: ParamsForLoginUser): Promise<void> => {
    try {
        await api.post("/auth/login", {
            login: params.login,
            password: params.password,
        });
    } catch (error) {
        if (error && typeof error === "object" && "response" in error) {
            // @ts-ignore
            const status = error.response?.status;
            // @ts-ignore
            const data = error.response?.data;
            if (isErrorMessage(data)) { throw data; }
            throw new Error(`Серверная ошибка ${status}: ${JSON.stringify(data)}`);
        }
        throw new Error(String(error));
    }
};
