import { JwtPayload, Secret } from 'jsonwebtoken';
export declare const jwtHelper: {
    createToken: (payload: object, secret: Secret, expireTime: string) => string;
    verifyToken: (token: string, secret: Secret) => JwtPayload;
};
//# sourceMappingURL=jwtHelper.d.ts.map