import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { authService } from './services/auth.service';
import { LoginCredentials, RegisterCredentials } from './types/auth.types';

// Query Keys
export const authKeys = {
    all: ['auth'] as const,
    user: () => [...authKeys.all, 'user'] as const,
};

// Hooks
export const useUser = () => {
    return useQuery({
        queryKey: authKeys.user(),
        queryFn: authService.getCurrentUser,
        retry: false,
    });
};

export const useLogin = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (credentials: LoginCredentials) => authService.login(credentials),
        onSuccess: (data) => {
            // Store token
            if (typeof window !== 'undefined') {
                localStorage.setItem('token', data.token);
            }
            // Update user cache
            queryClient.setQueryData(authKeys.user(), data.user);
        },
    });
};

export const useRegister = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (credentials: RegisterCredentials) => authService.register(credentials),
        onSuccess: (data) => {
            if (typeof window !== 'undefined') {
                localStorage.setItem('token', data.token);
            }
            queryClient.setQueryData(authKeys.user(), data.user);
        },
    });
};

export const useLogout = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: authService.logout,
        onSuccess: () => {
            if (typeof window !== 'undefined') {
                localStorage.removeItem('token');
            }
            queryClient.setQueryData(authKeys.user(), null);
            queryClient.clear();
        },
    });
};
