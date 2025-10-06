import { ICreateAccount, IResetPassword } from '../types/emailTamplate';
export declare const emailTemplate: {
    createAccount: (values: ICreateAccount) => {
        to: string;
        subject: string;
        html: string;
    };
    resetPassword: (values: IResetPassword) => {
        to: string;
        subject: string;
        html: string;
    };
};
//# sourceMappingURL=emailTemplate.d.ts.map