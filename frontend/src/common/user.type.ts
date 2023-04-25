export interface User {
    email: string;
    name: string;
    online?: boolean;
}

export interface AuthState {
    currentUser: User | null;
    Authenticated: boolean;
}
