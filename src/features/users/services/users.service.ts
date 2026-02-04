import { api } from '@/lib/axios';
import { User, UsersResponse } from '../types/users.types';

// Mock data for demonstration
const mockUsers: User[] = [
    {
        id: '1',
        name: 'Ahmed Hassan',
        email: 'ahmed@example.com',
        role: 'admin',
        createdAt: '2024-01-15',
    },
    {
        id: '2',
        name: 'Sara Mohamed',
        email: 'sara@example.com',
        role: 'user',
        createdAt: '2024-02-20',
    },
    {
        id: '3',
        name: 'Omar Ali',
        email: 'omar@example.com',
        role: 'moderator',
        createdAt: '2024-03-10',
    },
    {
        id: '4',
        name: 'Fatima Ibrahim',
        email: 'fatima@example.com',
        role: 'user',
        createdAt: '2024-03-25',
    },
];

export const usersService = {
    getUsers: async (): Promise<UsersResponse> => {
        // Simulate API call with mock data
        // In production, replace with: const { data } = await api.get<UsersResponse>('/users');
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    users: mockUsers,
                    total: mockUsers.length,
                });
            }, 500);
        });
    },

    getUserById: async (id: string): Promise<User> => {
        // Simulate API call
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const user = mockUsers.find((u) => u.id === id);
                if (user) {
                    resolve(user);
                } else {
                    reject(new Error('User not found'));
                }
            }, 300);
        });
    },
};
