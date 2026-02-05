import { api } from '@/lib/axios';
import { User, UsersResponse } from '../types/users.types';

// Mock data for demonstration - changed to let to allow mutation in this example
let mockUsers: User[] = [
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
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    users: [...mockUsers],
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

    createUser: async (userData: Omit<User, 'id' | 'createdAt'>): Promise<User> => {
        // Simulate API call
        return new Promise((resolve) => {
            setTimeout(() => {
                const newUser: User = {
                    ...userData,
                    id: Math.random().toString(36).substr(2, 9),
                    createdAt: new Date().toISOString().split('T')[0],
                };
                mockUsers = [newUser, ...mockUsers];
                resolve(newUser);
            }, 500);
        });
    },
};
