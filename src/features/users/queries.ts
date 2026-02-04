import { useQuery } from '@tanstack/react-query';
import { usersService } from './services/users.service';

// Query Keys
export const usersKeys = {
    all: ['users'] as const,
    lists: () => [...usersKeys.all, 'list'] as const,
    list: (filters: string) => [...usersKeys.lists(), { filters }] as const,
    details: () => [...usersKeys.all, 'detail'] as const,
    detail: (id: string) => [...usersKeys.details(), id] as const,
};

// Hooks
export const useUsers = () => {
    return useQuery({
        queryKey: usersKeys.lists(),
        queryFn: usersService.getUsers,
    });
};

export const useUser = (id: string) => {
    return useQuery({
        queryKey: usersKeys.detail(id),
        queryFn: () => usersService.getUserById(id),
        enabled: !!id,
    });
};
