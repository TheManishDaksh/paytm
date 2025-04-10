import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";
import { redirect } from "next/navigation";

export async function Home(){
  const session = await getServerSession(authOptions)
    if(session?.data?.user){
      redirect("/dashboard")
    }
    redirect("/api/auth/singin")
}