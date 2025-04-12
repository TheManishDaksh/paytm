"use client"
import { Button } from "@repo/ui/Button"
import { Card } from "@repo/ui/Card"
import { Select } from "@repo/ui/Select"
import { TextInput } from "@repo/ui/TextInput"
import {useState} from "react"

const SUPPORTED_BANKS = [{
    name: "HDFC Bank",
    redirectUrl: "https://netbanking.hdfcbank.com"
}, {
    name: "Axis Bank",
    redirectUrl: "https://www.axisbank.com/"
}]

export const AddMoneyCard=()=>{
    const [redirectUrl, setRedirectUrl] = useState(SUPPORTED_BANKS[0]?.redirectUrl)

    return (
        <Card title="Add Money"> 
            <div>
                <TextInput placeholder="Enter Amount" label="Amount" onChange={()=>{}} />
                    <div> Banks</div>
                    <Select onSelect={(value)=>{
                        setRedirectUrl(SUPPORTED_BANKS.find((x)=>x.name === value)?.redirectUrl || "")
                    }} options={SUPPORTED_BANKS.map((x)=>({
                        key :x.name,
                        value : x.name
                    }))} />
                    <div>
                        <Button onClick={()=>{
                            window.location.href = redirectUrl || "";
                        }}> Add Money </Button>
                    </div>
            </div>
        </Card>
    )
}