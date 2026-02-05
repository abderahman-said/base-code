'use client';
import { useState } from 'react';
import { useUsers } from '../queries';
import { Button } from '@/components/ui/button';
import { UserForm } from './UserForm';
import { Plus } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useTranslations } from 'next-intl';

export function UserList() {
    const t = useTranslations('Users');
    const { data, isLoading, isError } = useUsers();
    const [open, setOpen] = useState(false);

    if (isLoading) {
        return <div className="p-8 text-center text-zinc-500">{t('loading')}</div>;
    }

    if (isError) {
        return <div className="p-8 text-center text-red-500">{t('error_loading')}</div>;
    }

    const handleSuccess = () => {
        setOpen(false);
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 ">
                    {t('title')}
                </h3>

                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        <Button>
                            <Plus className="w-4 h-4 ml-2" />
                            {t('add_user')}
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>{t('add_new_user')}</DialogTitle>
                            <DialogDescription>
                                {t('form_description')}
                            </DialogDescription>
                        </DialogHeader>

                        <UserForm
                            onSuccess={handleSuccess}
                            onCancel={() => setOpen(false)}
                        />
                    </DialogContent>
                </Dialog>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {data?.users.map((user) => (
                    <div
                        key={user.id}
                        className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
                    >
                        <div className="mb-4 flex items-start justify-between">
                            <div>
                                <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">
                                    {user.name}
                                </h4>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                    {user.email}
                                </p>
                            </div>
                            <span className={`rounded-full px-2 py-1 text-xs font-medium ${user.role === 'admin'
                                ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
                                : user.role === 'moderator'
                                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                                    : 'bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400'
                                }`}>
                                {t(`roles.${user.role}` as any)}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
