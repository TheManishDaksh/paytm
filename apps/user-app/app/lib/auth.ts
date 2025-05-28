import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs";
import db from "@repo/db/client"

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                number: { label: "Mobile Number:", type: "text", placeholder: "123123123" },
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
                        name: createUser.name,
                        email: createUser.email
                    }
                } catch (err: any) {
                    console.log(err);
                }
                return null;

            }
        })
    ],

    secret: process.env.JWT_SECRET || "MAnishKuamarSecret9548263179",


    callbacks: {
        async jwt({ token, account, profile }:any) {
            if (account) {
                token.accessToken = account.access_token
                token.id = profile.id
            }
            return token
        },
        async session({ session, token, user }: any) {
            session.accessToken = token.accessToken
            session.user.id = token.id

            return session
        }
    }
}