"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const createUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().nonempty('Name is required'),
        contact: zod_1.z.string().nonempty('Contact is required'),
        email: zod_1.z.string().nonempty('Email is required'),
        password: zod_1.z.string().nonempty('Password is required'),
        location: zod_1.z.string().nonempty('Location is required'),
        profile: zod_1.z.string().optional(),
    }),
});
exports.UserValidation = {
    createUserZodSchema,
};
//# sourceMappingURL=user.validation.js.map