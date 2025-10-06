import { z } from 'zod';
export declare const UserValidation: {
    createUserZodSchema: z.ZodObject<{
        body: z.ZodObject<{
            name: z.ZodString;
            contact: z.ZodString;
            email: z.ZodString;
            password: z.ZodString;
            location: z.ZodString;
            profile: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>;
};
//# sourceMappingURL=user.validation.d.ts.map