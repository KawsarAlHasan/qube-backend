import { Error } from 'mongoose';
import { IErrorMessage } from '../types/errors.types';
declare const handleValidationError: (error: Error.ValidationError) => {
    statusCode: number;
    message: string;
    errorMessages: IErrorMessage[];
};
export default handleValidationError;
//# sourceMappingURL=handleValidationError.d.ts.map