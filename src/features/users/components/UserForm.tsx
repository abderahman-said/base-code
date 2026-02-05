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


export function UserForm({ user, onSubmit, onSuccess, onCancel }: UserFormProps) {
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
            console.log('Form data:', data);
            await new Promise(resolve => setTimeout(resolve, 1000));
            if (onSubmit) {
                await onSubmit(data);
            }
            toast.success(user ? 'تم تحديث المستخدم بنجاح' : 'تم إضافة المستخدم بنجاح');
            if (!user) {
                form.reset();
            }
            onSuccess?.();
        } catch (error) {
            console.error(error);
            toast.error('حدث خطأ أثناء حفظ البيانات');
        }
    };
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                <ControlledInput
                    control={form.control}
                    name="name"
                    label="الاسم"
                    placeholder="أدخل الاسم"
                />

                <ControlledInput
                    control={form.control}
                    name="email"
                    label="البريد الإلكتروني"
                    placeholder="example@email.com"
                    type="email"
                />

                <ControlledSelect
                    control={form.control}
                    name="role"
                    label="الدور"
                    placeholder="اختر الدور"
                    options={[
                        { value: 'user', label: 'مستخدم' },
                        { value: 'moderator', label: 'مشرف' },
                        { value: 'admin', label: 'مدير' },
                    ]}
                />

                <div className="flex gap-4 pt-4">
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'جاري الحفظ...' : isEditing ? 'حفظ التعديلات' : 'إضافة المستخدم'}
                    </Button>
                    {onCancel && (
                        <Button type="button" variant="outline" onClick={() => {
                            toast.info('تم إلغاء العملية');
                            onCancel();
                        }}>
                            إلغاء
                        </Button>
                    )}
                </div>
            </form>
        </Form>
    );
}
