import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";
import db from "@repo/db/client" //this can cause error manually imported

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Mobile Number",
            credentials: {
                number: { label: "Mobile Number:", type: "text", placeholder: "123123123", required : true },
                password: { label: "Password", type: "password", required : true }
            },
            async authorize(credentials: any) {
                const hashedPassword = await bcrypt.hash(credentials?.password, 10)

                const user = await db.user.findFirst({
                    where: {
                        number: credentials?.number
                    }
                })
                if (user) {
                    const passwordValidation = await bcrypt.compare(credentials.password, user.password)
                    if (passwordValidation) {
                        return {
                            id: user.id.toString(),
                            number: user.number,
                            name: user?.name
                        }
                    } 
                        return null;
                    }
                
                    try {
                        const createUser = await db.user.create({
                            data: {
                                number: credentials.number,
                                password: hashedPassword
                            }
                        })
                        return {
                            id: createUser.id.toString(),
                            number: createUser.number,
                            password: createUser.password
                        }
                    } catch (err: any) {
                        console.log(err);
                    }
                    return null;
                
            }
        })
    ],

    secret : process.env.JWT_SECRET,
       
    callbacks: {
        async session({ token , session } : any) {
            session.user.id = token.sub
            return session
        }
    }
}