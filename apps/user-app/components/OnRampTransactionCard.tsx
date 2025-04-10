import { Card } from "@repo/ui/Card"

export const OnRampTransactionCard=({transaction}:{
    transaction : {
        time : Date
        status : string
        amount : number
        provider : string
    }[]
})=>{
    if(!transaction.length){
        return (
            <Card title="Transaction History"> 
                <div>
                    No Transactions Happened
                </div>
            </Card>
        )
    }
    return (
        <Card title="Transaction Hisory"> 
              <div className="pt-2">
            {transaction.map(t => <div className="flex justify-between">
                <div>
                    <div className="text-sm">
                        Received INR
                    </div>
                    <div className="text-slate-600 text-xs">
                        {t.time.toDateString()}
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    + Rs {t.amount / 100}
                </div>

            </div>)}
        </div>
        </Card>
    )
}