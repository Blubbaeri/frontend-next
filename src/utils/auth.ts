// src/utils/auth.ts
export const AUTH_KEY = "app_token";

export function setAuthToken(token: string) {
    if (typeof window !== "undefined") localStorage.setItem(AUTH_KEY, token);
}

export function getAuthToken(): string | null {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(AUTH_KEY);
}

export function clearAuthToken() {
    if (typeof window !== "undefined") localStorage.removeItem(AUTH_KEY);
}

export function isAuthenticated(): boolean {
    return !!getAuthToken();
}
