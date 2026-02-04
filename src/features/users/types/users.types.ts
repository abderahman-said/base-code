export interface User {
    id: string;
    name: string;
    email: string;
    role: 'user' | 'admin' | 'moderator';
    avatar?: string;
    createdAt: string;
}

export interface UsersResponse {
    users: User[];
    total: number;
}
