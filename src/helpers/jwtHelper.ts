import jwt, { JwtPayload, Secret } from 'jsonwebtoken';

const createToken = (payload: object, secret: Secret, expireTime: string) => {
  // jwt.sign overloads are strict; cast options to any to satisfy TypeScript here
  return jwt.sign(payload as any, secret as any, { expiresIn: expireTime } as any);
};

const verifyToken = (token: string, secret: Secret) => {
  return jwt.verify(token as string, secret as any) as JwtPayload;
};

export const jwtHelper = { createToken, verifyToken };
