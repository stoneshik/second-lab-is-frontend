import { api } from "~/lib/axios";
import { isErrorMessage } from "~/types/ErrorMessage";

export const logoutUser = async (): Promise<void> => {
    try {
        await api.post("/auth/logout");
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
