
import { create } from "zustand";

type counterState = {
    balance : number
}

export const usebalance = create<counterState>((set)=>({
     balance : 0
}))