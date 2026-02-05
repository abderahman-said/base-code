import * as z from 'zod';

export const userFormSchema = z.object({
    name: z.string().min(2, 'الاسم يجب أن يكون حرفين على الأقل'),
    email: z.string().email('البريد الإلكتروني غير صحيح'),
    role: z.enum(['user', 'admin', 'moderator']),
});

export type UserFormValues = z.infer<typeof userFormSchema>;
