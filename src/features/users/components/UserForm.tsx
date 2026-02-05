'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { ControlledInput } from '@/components/ui/input';
import { Form } from '@/components/ui/Form';
import { UserFormProps } from '../types/users.types';
import { userFormSchema, UserFormValues } from '../types/user-schema';
import { toast } from 'sonner';
import { ControlledSelect } from '@/components/ui/select/ControlledSelect';
import { useTranslations } from 'next-intl';
import { useQueryClient } from '@tanstack/react-query';
import { usersKeys } from '../keys';
import { usersService } from '../services/users.service';

export function UserForm({ user, onSubmit, onSuccess, onCancel }: UserFormProps) {
    const t = useTranslations('Users');
    const queryClient = useQueryClient();

    const form = useForm<UserFormValues>({
        resolver: zodResolver(userFormSchema),
        defaultValues: {
            name: user?.name || '',
            email: user?.email || '',
            role: user?.role || 'user',
        },
    });

    const isSubmitting = form.formState.isSubmitting;
    const isEditing = !!user;

    const handleSubmit = async (data: UserFormValues) => {
        try {
            if (isEditing) {
                // Update implementation would go here
                if (onSubmit) {
                    await onSubmit(data);
                }
            } else {
                // For new users, use our simulated createUser service
                await usersService.createUser({
                    name: data.name,
                    email: data.email,
                    role: data.role as any
                });
            }

            // Invalidate the users query to refresh the list
            await queryClient.invalidateQueries({ queryKey: usersKeys.all });

            toast.success(user ? t('messages.success_update') : t('messages.success_add'));

            if (!user) {
                form.reset();
            }
            onSuccess?.();
        } catch (error) {
            console.error(error);
            toast.error(t('messages.error_save'));
        }
    };
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                <ControlledInput
                    control={form.control}
                    name="name"
                    label={t('fields.name')}
                    placeholder={t('fields.name_placeholder')}
                />

                <ControlledInput
                    control={form.control}
                    name="email"
                    label={t('fields.email')}
                    placeholder="example@email.com"
                    type="email"
                />

                <ControlledSelect
                    control={form.control}
                    name="role"
                    label={t('fields.role')}
                    placeholder={t('fields.role_placeholder')}
                    options={[
                        { value: 'user', label: t('roles.user') },
                        { value: 'moderator', label: t('roles.moderator') },
                        { value: 'admin', label: t('roles.admin') },
                    ]}
                />

                <div className="flex gap-4 pt-4">
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? t('actions.saving') : isEditing ? t('actions.save_changes') : t('actions.add')}
                    </Button>
                    {onCancel && (
                        <Button type="button" variant="outline" onClick={() => {
                            toast.info(t('messages.cancelled'));
                            onCancel();
                        }}>
                            {t('actions.cancel')}
                        </Button>
                    )}
                </div>
            </form>
        </Form>
    );
}
