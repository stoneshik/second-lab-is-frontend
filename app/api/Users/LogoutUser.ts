import { api } from "~/lib/axios";
import { tokenService } from "~/services/tokenService";
import { isErrorMessage } from "~/types/ErrorMessage";
import type { MessageResponseDto } from "~/types/MessageResponseDto";

export const logoutUser = async (): Promise<MessageResponseDto> => {
    try {
        const response = await api.post("/auth/logout");
        tokenService.remove();
        return response.data as MessageResponseDto;
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
