import { Button } from "@repo/ui/Button"

interface AppbarProps{
    user? : {
        name? : string | null
    }
    onSignin : any
    onSignout : any
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