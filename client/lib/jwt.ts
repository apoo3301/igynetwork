import jwt, { JwtPayload } from "jsonwebtoken";

interface SignOptions {
    expirersIn?: string | number;
}

const DEFAULT_SIGN_OPTIONS: SignOptions = {
    expirersIn: '1h',
}

export function signJwtAccessToken(payload: JwtPayload, options: SignOptions = DEFAULT_SIGN_OPTIONS) {
    const secret = process.env.JWT_ACCESS_TOKEN_SECRET;
    const token = jwt.sign(payload, secret!, options);
    return token;
}

export function verifyJwtAccessToken(token: string) {
    try {
        const secret = process.env.JWT_ACCESS_TOKEN_SECRET;
        const decoded = jwt.verify(token, secret!);
        return decoded as JwtPayload;
    } catch (error) {
        console.log(error);
        return null;
    }
}