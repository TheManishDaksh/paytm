import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";
import db from "@repo/db/client" //this can cause error manually imported

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Mobile Number",
            credentials: {
                number: { label: "Mobile Number:", type: "number", placeholder: "123123123" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: any) {
                const hashedPassword = await bcrypt.hash(credentials?.password, 10)

                const user = await db.user.findFirst({
                    where: {
                        number: credentials?.number
                    }
                })
                if (user) {
                    const passwordValidation = await bcrypt.compare(user.password, credentials.password)
                    if (passwordValidation) {
                        return {
                            id: user.id.toString(),
                            number: user.number,
                            password: user.password,
                            name: user.name
                        }
                    } else {
                        return null;
                    }
                } else {
                    try {
                        const createUser = await db.user.create({
                            data: {
                                number: credentials.number,
                                password: hashedPassword,
                                name: credentials.name
                            }
                        })
                        return {
                            id: createUser.id.toString(),
                            number: createUser.number,
                            name: createUser.name,
                            password: createUser.password
                        }
                    } catch (err: any) {
                        console.log(err);
                    }
                    return null;
                }
            }
        })
    ],
    callbacks: {
        async session({ token , session } : any) {
            session.user.id = token.sub
            return session
        }
    }
}