import prisma from "@/lib/prisma";
import * as bcrypt from "bcrypt";

interface LoginRequest {
    username: string;
    password: string;
}

export async function Post(request:Request) {
    const body:LoginRequest = await request.json();
    const user = await prisma.user.findFirst({
        where : { email: body.username }
    })

    if (user && (await bcrypt.compare(body.password, user.password))){
        const { password, ...userWithoutPassword } = user;
        return new Response(JSON.stringify(userWithoutPassword));
    } else return new Response(JSON.stringify(null));
}