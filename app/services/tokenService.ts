const ACCESS_TOKEN_KEY = "accessToken";
const USER_ID_KEY = "userId";

export interface Credentials {
    accessToken: string;
    userId: number;
}

export const tokenService = {
    isEmpty(): boolean {
        return !localStorage.getItem(ACCESS_TOKEN_KEY) ||
               !localStorage.getItem(USER_ID_KEY);
    },
    get(): Credentials | null {
        const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
        const userId = localStorage.getItem(USER_ID_KEY);
        if (!accessToken || !userId) {
            return null;
        }
        return {
            accessToken,
            userId: Number.parseInt(userId)
        };
    },
    set(credentials: Credentials): void {
        localStorage.setItem(ACCESS_TOKEN_KEY, credentials.accessToken);
        localStorage.setItem(USER_ID_KEY, credentials.userId.toString());
    },
    remove(): void {
        localStorage.removeItem(ACCESS_TOKEN_KEY);
        localStorage.removeItem(USER_ID_KEY);
    }
};
