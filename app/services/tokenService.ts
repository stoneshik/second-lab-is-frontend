const ACCESS_TOKEN_KEY = "accessToken";

export const tokenService = {
    isEmpty(): boolean {
        return localStorage.getItem(ACCESS_TOKEN_KEY) === null;
    },
    get(): string | null {
        return localStorage.getItem(ACCESS_TOKEN_KEY);
    },
    set(token: string): void {
        localStorage.setItem(ACCESS_TOKEN_KEY, token);
    },
    remove(): void {
        localStorage.removeItem(ACCESS_TOKEN_KEY);
    }
};
