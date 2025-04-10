import  Express  from "express"
import db from "@repo/db/client"
const app = Express();
app.use(Express.json());

interface paymentInfo {
    token : string
    userId : string
    amount : Number
}
app.post("/hdfcbank", async(req, res )=>{
    const paymentInformation : paymentInfo = {
        token : req.body.token,
        userId : req.body.id,
        amount : req.body.amount
    }
    try{
        await db.$transaction([
            db.balance.updateMany({
                where : {
                    userId : Number(paymentInformation.userId)
                },
                data : {
                    amount  : Number(paymentInformation.amount)
                }
            }),
            db.onRampTransaction.updateMany({
                where : {
                    token : paymentInformation.token    
                },
                data : {
                    status : "Success"
                }
            })
        ])
        res.json({
            message : 'captured'
        })
    }catch(error : any){
        console.log(error);
        res.status(403).json({
            message : "There are problem while processing bank_webhook"
        })
    }
})