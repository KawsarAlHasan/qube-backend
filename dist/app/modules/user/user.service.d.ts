import { JwtPayload } from 'jsonwebtoken';
import { IUser } from './user.interface';
export declare const UserService: {
    createUserToDB: (payload: Partial<IUser>) => Promise<IUser>;
    getUserProfileFromDB: (user: JwtPayload) => Promise<Partial<IUser>>;
    updateProfileToDB: (user: JwtPayload, payload: Partial<IUser>) => Promise<Partial<IUser | null>>;
};
//# sourceMappingURL=user.service.d.ts.map