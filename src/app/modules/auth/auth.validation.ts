import { z } from 'zod';

const createVerifyEmailZodSchema = z.object({
  body: z.object({
    email: z.string().nonempty('Email is required'),
    oneTimeCode: z.number(),
  }),
});

const createLoginZodSchema = z.object({
  body: z.object({
    email: z.string().nonempty('Email is required'),
    password: z.string().nonempty('Password is required'),
  }),
});

const createForgetPasswordZodSchema = z.object({
  body: z.object({
    email: z.string().nonempty('Email is required'),
  }),
});

const createResetPasswordZodSchema = z.object({
  body: z.object({
    newPassword: z.string().nonempty('Password is required'),
    confirmPassword: z.string().nonempty('Confirm Password is required'),
  }),
});

const createChangePasswordZodSchema = z.object({
  body: z.object({
    currentPassword: z.string().nonempty('Current Password is required'),
    newPassword: z.string().nonempty('New Password is required'),
    confirmPassword: z.string().nonempty('Confirm Password is required'),
  }),
});

export const AuthValidation = {
  createVerifyEmailZodSchema,
  createForgetPasswordZodSchema,
  createLoginZodSchema,
  createResetPasswordZodSchema,
  createChangePasswordZodSchema,
};
