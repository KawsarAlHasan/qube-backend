"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleZodError = (error) => {
    const errorMessages = error.issues.map((el) => {
        return {
            path: el.path && el.path.length ? el.path[el.path.length - 1] : '',
            message: el.message,
        };
    });
    const statusCode = 400;
    return {
        statusCode,
        message: 'Validation Error',
        errorMessages,
    };
};
exports.default = handleZodError;
//# sourceMappingURL=handleZodError.js.map