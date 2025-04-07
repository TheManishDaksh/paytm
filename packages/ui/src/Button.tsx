import { ReactNode } from "react"

interface ButtonProps{
    children : ReactNode;
    onClick : ()=>void;
}

export const Button =({onClick, children}: ButtonProps)=>{
   return <button onClick={onClick} className="ui-bg-slate-500 ui-text-white"> {children} </button>
}