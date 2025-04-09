"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import { Appbar } from "./Appbar";
import { useRouter } from "next/router";

export function AppbarClient(){
    const session = useSession();
    const router = useRouter();
    return (
        <div>
            <Appbar onSignin={signIn} onSignout={async()=>{
                await signOut();
                router.push('/auth');
            }} user={session.data?.user}/>
        </div>
    )   
}