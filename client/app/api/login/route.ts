import { signJwtAccessToken } from "@/lib/jwt";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

interface LoginRequest {
    username: string;
    password: string;
}

export async function POST(request: Request) {
    const body: LoginRequest = await request.json();
    const user = await prisma.user.findFirst({
        where: {
            username: body.username,
        },
    });

    if (user && (await bcrypt.compare(body.password, user.password))) {
        const { password, ...userWithoutPass } = user;
        const accessToken = signJwtAccessToken(userWithoutPass);
        const result = {
            ...userWithoutPass,
            accessToken,
        };
        return new Response(JSON.stringify(result));
    } else return new Response(JSON.stringify(null));
}