import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { authService } from './services/auth.service';
import type { LoginCredentials, RegisterCredentials, AuthResponse } from './types/auth.types';
import { authKeys } from './keys';

// Query hook for fetching current user
export const useUser = () => {
    return useQuery({
        queryKey: authKeys.user(),
        queryFn: authService.getCurrentUser,
        retry: false,
    });
};

// Mutation hook for login
export const useLogin = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (credentials: LoginCredentials) => authService.login(credentials),
        onSuccess: (data: AuthResponse) => {
            // Store token
            localStorage.setItem('token', data.token);
            // Update user cache
            queryClient.setQueryData(authKeys.user(), data.user);
        },
    });
};

// Mutation hook for register
export const useRegister = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (credentials: RegisterCredentials) => authService.register(credentials),
        onSuccess: (data: AuthResponse) => {
            // Store token
            localStorage.setItem('token', data.token);
            // Update user cache
            queryClient.setQueryData(authKeys.user(), data.user);
        },
    });
};

// Mutation hook for logout
export const useLogout = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: authService.logout,
        onSuccess: () => {
            // Clear token
            localStorage.removeItem('token');
            // Clear user cache
            queryClient.setQueryData(authKeys.user(), null);
            // Clear all queries
            queryClient.clear();
        },
    });
};
