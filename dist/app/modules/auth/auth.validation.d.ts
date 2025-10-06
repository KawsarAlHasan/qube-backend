import { z } from 'zod';
export declare const AuthValidation: {
    createVerifyEmailZodSchema: z.ZodObject<{
        body: z.ZodObject<{
            email: z.ZodString;
            oneTimeCode: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>;
    createForgetPasswordZodSchema: z.ZodObject<{
        body: z.ZodObject<{
            email: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
    createLoginZodSchema: z.ZodObject<{
        body: z.ZodObject<{
            email: z.ZodString;
            password: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
    createResetPasswordZodSchema: z.ZodObject<{
        body: z.ZodObject<{
            newPassword: z.ZodString;
            confirmPassword: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
    createChangePasswordZodSchema: z.ZodObject<{
        body: z.ZodObject<{
            currentPassword: z.ZodString;
            newPassword: z.ZodString;
            confirmPassword: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
};
//# sourceMappingURL=auth.validation.d.ts.map