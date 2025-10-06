import { ZodError } from 'zod';
import { IErrorMessage } from '../types/errors.types';
declare const handleZodError: (error: ZodError) => {
    statusCode: number;
    message: string;
    errorMessages: IErrorMessage[];
};
export default handleZodError;
//# sourceMappingURL=handleZodError.d.ts.map