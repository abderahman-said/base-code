/**
 * Environment Variables
 * Type-safe access to environment variables
 */

export const env = {
    apiUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com',
    isDevelopment: process.env.NODE_ENV === 'development',
    isProduction: process.env.NODE_ENV === 'production',
    isTest: process.env.NODE_ENV === 'test',
} as const;
