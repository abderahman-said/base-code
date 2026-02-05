import axios, { AxiosError } from 'axios';

interface ApiErrorResponse {
    message?: string;
    error?: string;
}

/**
 * Parse API errors into user-friendly messages
 */
export function parseApiError(error: unknown): string {
    if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<ApiErrorResponse>;

        // Check for response data message
        if (axiosError.response?.data?.message) {
            return axiosError.response.data.message;
        }

        if (axiosError.response?.data?.error) {
            return axiosError.response.data.error;
        }

        // HTTP status messages
        if (axiosError.response?.status) {
            switch (axiosError.response.status) {
                case 400:
                    return 'Invalid request. Please check your input.';
                case 401:
                    return 'Unauthorized. Please log in again.';
                case 403:
                    return 'Access denied.';
                case 404:
                    return 'Resource not found.';
                case 500:
                    return 'Server error. Please try again later.';
                default:
                    return `Error: ${axiosError.response.status}`;
            }
        }

        // Network errors
        if (axiosError.message === 'Network Error') {
            return 'Network error. Please check your connection.';
        }

        return axiosError.message || 'Unexpected error occurred';
    }

    // Non-Axios errors
    if (error instanceof Error) {
        return error.message;
    }

    return 'Something went wrong';
}

/**
 * Check if error is authentication error
 */
export function isAuthError(error: unknown): boolean {
    if (axios.isAxiosError(error)) {
        return error.response?.status === 401;
    }
    return false;
}
