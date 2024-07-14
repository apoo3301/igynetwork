import prisma from "@/lib/prisma";
import * as bcrypt from "bcrypt";

interface User {
    username: string,
    password: string,
}

export async function Post(request: Request) {
    const body:User = await request.json();
    const user = await prisma.user.create({
        data: {
            username: body.username,
            password: await bcrypt.hash(body.password, 10),
        }
    })

    const { password, ...result } = user;
    return new Response(JSON.stringify(result));
} 

