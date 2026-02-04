'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from '@/components/ui/Form';
import { useLogin } from '../queries';

// Validation Schema
const loginSchema = z.object({
    email: z.string().email('البريد الإلكتروني غير صحيح'),
    password: z.string().min(6, 'كلمة المرور يجب أن تكون 6 أحرف على الأقل'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
    const loginMutation = useLogin();

    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit = async (data: LoginFormValues) => {
        try {
            await loginMutation.mutateAsync(data);
            alert('تم تسجيل الدخول بنجاح!');
        } catch (error) {
            alert('فشل تسجيل الدخول');
        }
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>البريد الإلكتروني</FormLabel>
                        <FormControl>
                            <Input
                                type="email"
                                placeholder="example@email.com"
                                {...field}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>كلمة المرور</FormLabel>
                        <FormControl>
                            <Input
                                type="password"
                                placeholder="••••••"
                                {...field}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <Button
                type="submit"
                variant="primary"
                className="w-full"
                disabled={loginMutation.isPending}
            >
                {loginMutation.isPending ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
            </Button>
        </form>
    );
}
