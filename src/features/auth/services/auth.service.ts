import { api } from '@/lib/axios';
import { AuthResponse, LoginCredentials, RegisterCredentials, User } from '../types/auth.types';

export const authService = {
    login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
        const { data } = await api.post<AuthResponse>('/auth/login', credentials);
        return data;
    },

    register: async (credentials: RegisterCredentials): Promise<AuthResponse> => {
        const { data } = await api.post<AuthResponse>('/auth/register', credentials);
        return data;
    },

    logout: async (): Promise<void> => {
        await api.post('/auth/logout');
    },

    getCurrentUser: async (): Promise<User> => {
        const { data } = await api.get<User>('/auth/me');
        return data;
    },
};
