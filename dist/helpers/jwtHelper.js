"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtHelper = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createToken = (payload, secret, expireTime) => {
    // jwt.sign overloads are strict; cast options to any to satisfy TypeScript here
    return jsonwebtoken_1.default.sign(payload, secret, { expiresIn: expireTime });
};
const verifyToken = (token, secret) => {
    return jsonwebtoken_1.default.verify(token, secret);
};
exports.jwtHelper = { createToken, verifyToken };
//# sourceMappingURL=jwtHelper.js.map