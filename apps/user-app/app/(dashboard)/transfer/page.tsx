"use client"
import { getServerSession } from "next-auth"
import { authOptions } from "../../lib/auth"
import prisma from "@repo/db/client"
import { BalanceCard } from "../../../components/BlanceCard";
import { AddMoneyCard } from "../../../components/AddMoneyCard";
import { OnRampTransactionCard } from "../../../components/OnRampTransactionCard";

async function getBalance(){
    const session = await getServerSession(authOptions)
    const balance = await prisma.balance.findFirst({
        where : {
            userId : Number(session?.user?.id)
        }
    });
    return {
        amount : balance?.amount || 0,
        locked : balance?.locked || 0
    }
}

async function getOnRampTransaction(){
    const session = await getServerSession(authOptions)
    const transaction = await prisma.onRampTransaction.findMany({
        where : {
            userId : Number(session.user?.id)
        }
    })
    return (transaction.map((x)=>({
        time : x.startTime,
        provider : x.provider,
        amount : x.amount,
        status : x.status
    })))
}

export default async function(){
    const balance = await getBalance()
    const transaction = await getOnRampTransaction()
    return (
        <div>
            <div> Transfer</div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
            <div>
                <AddMoneyCard />
            </div>
            <div>
                <BalanceCard amount={balance.amount} locked={balance.locked} />
                <div className="pt-4">
                    <OnRampTransactionCard transaction={transaction} />
                </div>
            </div>
        </div>
        </div>
    )
}