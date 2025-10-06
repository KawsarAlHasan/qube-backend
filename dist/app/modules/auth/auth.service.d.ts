import { JwtPayload } from 'jsonwebtoken';
import { IAuthResetPassword, IChangePassword, ILoginData, IVerifyEmail } from '../../../types/auth';
export declare const AuthService: {
    verifyEmailToDB: (payload: IVerifyEmail) => Promise<{
        data: string | undefined;
        message: string;
    }>;
    loginUserFromDB: (payload: ILoginData) => Promise<{
        createToken: string;
    }>;
    forgetPasswordToDB: (email: string) => Promise<void>;
    resetPasswordToDB: (token: string, payload: IAuthResetPassword) => Promise<void>;
    changePasswordToDB: (user: JwtPayload, payload: IChangePassword) => Promise<void>;
};
//# sourceMappingURL=auth.service.d.ts.map