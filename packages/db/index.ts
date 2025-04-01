import { PrismaClient } from "@prisma/client" // this can cause error manually imporitng

const prismaGlobalSingleton = ()=>{
    return new PrismaClient()
}

declare global  {
    var prismaGlobal : undefined | ReturnType <typeof prismaGlobalSingleton> 
}

const prisma: ReturnType<typeof prismaGlobalSingleton> = globalThis.prismaGlobal ?? prismaGlobalSingleton()

export default prisma;

//@ts-ignore
if ( process.env.NODE_ENV !== "production" ) globalThis.prismaGlobal = prisma