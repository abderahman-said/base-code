import { UserFormValues } from "./user-schema";

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

export interface UserFormProps {
    user?: User;
    onSubmit?: (data: UserFormValues) => void | Promise<void>;
    onSuccess?: () => void;
    onCancel?: () => void;
}