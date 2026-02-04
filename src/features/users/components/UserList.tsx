'use client';

import { useUsers } from '../queries';
import { Button } from '@/components/ui/Button';

export function UserList() {
    const { data, isLoading, error } = useUsers();

    if (isLoading) {
        return (
            <div className="flex items-center justify-center p-8">
                <div className="text-zinc-600 dark:text-zinc-400">Loading users...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center p-8">
                <div className="text-red-600 dark:text-red-400">
                    Error loading users: {error.message}
                </div>
            </div>
        );
    }

    return (
        <div className="w-full">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-black dark:text-white">Users</h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Total: {data?.total || 0} users
                </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {data?.users.map((user) => (
                    <div
                        key={user.id}
                        className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <h3 className="font-semibold text-black dark:text-white">
                                    {user.name}
                                </h3>
                                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                    {user.email}
                                </p>
                            </div>
                            <span
                                className={`rounded-full px-2 py-1 text-xs font-medium ${user.role === 'admin'
                                    ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
                                    : user.role === 'moderator'
                                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                                        : 'bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300'
                                    }`}
                            >
                                {user.role}
                            </span>
                        </div>
                        <div className="mt-4 flex gap-2">
                            <Button
                                variant="outline"
                                size="sm"
                                className="flex-1"
                                onClick={() => alert(`عرض ملف ${user.name}`)}
                            >
                                View Profile
                            </Button>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => alert(`تعديل ${user.name}`)}
                            >
                                Edit
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
