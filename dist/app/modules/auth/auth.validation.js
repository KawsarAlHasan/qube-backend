"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidation = void 0;
const zod_1 = require("zod");
const createVerifyEmailZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string().nonempty('Email is required'),
        oneTimeCode: zod_1.z.number(),
    }),
});
const createLoginZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string().nonempty('Email is required'),
        password: zod_1.z.string().nonempty('Password is required'),
    }),
});
const createForgetPasswordZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string().nonempty('Email is required'),
    }),
});
const createResetPasswordZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        newPassword: zod_1.z.string().nonempty('Password is required'),
        confirmPassword: zod_1.z.string().nonempty('Confirm Password is required'),
    }),
});
const createChangePasswordZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        currentPassword: zod_1.z.string().nonempty('Current Password is required'),
        newPassword: zod_1.z.string().nonempty('New Password is required'),
        confirmPassword: zod_1.z.string().nonempty('Confirm Password is required'),
    }),
});
exports.AuthValidation = {
    createVerifyEmailZodSchema,
    createForgetPasswordZodSchema,
    createLoginZodSchema,
    createResetPasswordZodSchema,
    createChangePasswordZodSchema,
};
//# sourceMappingURL=auth.validation.js.map