import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // Data is stale after 1 minute
            staleTime: 1000 * 60 * 1,
            // Cache data for 5 minutes
            gcTime: 1000 * 60 * 5,
            // Retry failed queries 1 time
            retry: 1,
            // Don't refetch on window focus
            refetchOnWindowFocus: false,
        },
    },
});
