import { Response } from 'express';
type IData<T> = {
    success: boolean;
    statusCode: number;
    message?: string;
    pagination?: {
        page: number;
        limit: number;
        totalPage: number;
        total: number;
    };
    data?: T;
};
declare const sendResponse: <T>(res: Response, data: IData<T>) => void;
export default sendResponse;
//# sourceMappingURL=sendResponse.d.ts.map