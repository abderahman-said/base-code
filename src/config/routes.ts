/**
 * Application Routes
 * Centralized route constants to avoid hardcoded strings
 */
export const routes = {
    home: '/',
    login: '/login',
    register: '/register',
    dashboard: '/dashboard',
    users: '/users',
    profile: '/profile',
    settings: '/settings',
} as const;

/**
 * API Endpoints
 * Centralized API endpoint constants
 */
export const apiEndpoints = {
    auth: {
        login: '/auth/login',
        register: '/auth/register',
        logout: '/auth/logout',
        me: '/auth/me',
    },
    users: {
        list: '/users',
        detail: (id: string) => `/users/${id}`,
        create: '/users',
        update: (id: string) => `/users/${id}`,
        delete: (id: string) => `/users/${id}`,
    },
} as const;
