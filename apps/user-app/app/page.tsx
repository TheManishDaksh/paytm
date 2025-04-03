"use client"
import { signIn, useSession } from "next-auth/react"

function Home (){
  const {data : session} = useSession()
  console.log(session?.user);
      
  return  <div> 
      { (session?.user === undefined )?(
        <div>
          <button onClick={()=>signIn()}>Login</button>
        </div>
      ):("User")}

    </div>
  
}
export default Home