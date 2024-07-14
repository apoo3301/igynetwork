import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

interface LoginRequest {
    username: string;
    password: string;
}

export async function POST(request: Request) {
    const body: LoginRequest = await request.json();
    const user = await prisma.user.findUnique({
        where: {
            username: body.username,
        },
    });

    if (!user) {
        return new Response(JSON.stringify({ error: "User not found" }), {
            status: 404,
        });
    }

    const match = await bcrypt.compare(body.password, user.password);

    if (!match) {
        return new Response(JSON.stringify({ error: "Invalid password" }), {
            status: 401,
        });
    }

    const { password, ...result } = user;
    return new Response(JSON.stringify(result));
}