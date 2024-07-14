"use client"

import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const SigninButton = () => {
    const { data: session } = useSession();
    if (session && session.user) {
        return (
            <div className="flex gap-4 ml-auto">
                <p className="text-blue-800">{session.user.name}</p>
                <button onClick={()=>signOut()} className="text-red-400">
                    Sign Out
                </button>
            </div>
        )
    }
    return <button onClick={()=>signIn()} className="text-green-400 ml-auto">Sign In</button>
}

export default SigninButton;