import { z } from 'zod';

const createUserZodSchema = z.object({
  body: z.object({
    name: z.string().nonempty('Name is required'),
    contact: z.string().nonempty('Contact is required'),
    email: z.string().nonempty('Email is required'),
    password: z.string().nonempty('Password is required'),
    location: z.string().nonempty('Location is required'),
    profile: z.string().optional(),
  }),
});

export const UserValidation = {
  createUserZodSchema,
};
