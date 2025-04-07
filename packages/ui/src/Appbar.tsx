import { Button } from "./Button"

interface AppbarProps{
    user? : {
        name? : string | null
    }
    onSignin : ()=>void
    onSignout : ()=>void
}

export const Appbar = ({user, onSignin, onSignout}:AppbarProps)=>{
    return (
        <div>
        <div>
            Paytm Logo
        </div> 
        <div>
            <Button onClick={user ? onSignout : onSignin}>{user ? "LogOut" : "Signin"}</Button>
        </div>
    </div>
    )
}