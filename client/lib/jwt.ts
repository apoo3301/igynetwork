import jwt, { JwtPayload } from "jsonwebtoken";

interface SignOptions {
    expiresIn?: string | number;
}

const DEFAULT_SIGN_OPTIONS: SignOptions = {
    expiresIn: '1h',
}

export function signJwtAccessToken(payload: JwtPayload, options: SignOptions = DEFAULT_SIGN_OPTIONS) {
    const secret_token = process.env.JWT_ACCESS_TOKEN_SECRET;
    const token = jwt.sign(payload, secret_token!, options);
    return token;
}

export function verifyJwtAccessToken(token: string) {
    try {
        const secret_token = process.env.JWT_ACCESS_TOKEN_SECRET;
        const decoded = jwt.verify(token, secret_token!);
        return decoded as JwtPayload;
    } catch (error) {
        console.log(error);
        return null;
    }
}