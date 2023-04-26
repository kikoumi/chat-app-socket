export interface User {
    userName: string;
    online?: boolean;
}

export interface AuthState {
    currentUser: User | null;
    Authenticated: boolean;
}
