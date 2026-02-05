import { useQuery } from '@tanstack/react-query';
import { usersService } from './services/users.service';
import { usersKeys } from './keys';

// Query hook for fetching all users
export const useUsers = () => {
    return useQuery({
        queryKey: usersKeys.lists(),
        queryFn: usersService.getUsers,
    });
};

// Query hook for fetching a single user by ID
export const useUser = (id: string) => {
    return useQuery({
        queryKey: usersKeys.detail(id),
        queryFn: () => usersService.getUserById(id),
        enabled: !!id,
    });
};
