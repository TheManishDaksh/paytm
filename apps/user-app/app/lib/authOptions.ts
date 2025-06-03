import { prisma } from "@repo/db/client";
import bcrypt from "bcrypt"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {

  providers: [
    CredentialsProvider({
      name: "number",
      credentials: {
        number: { label: "Number", type: "text", placeholder: "1234567890", required: true },
        password: { label: "Password", type: "password", required: true }
      },
      //@ts-ignore
      async authorize(credentials: any) {
        try {
          const existingUser = await prisma.user.findFirst({
            where: {
              number: credentials?.number
            }
          });

          if (existingUser) {
            const passwordMatch = await bcrypt.compare(credentials?.password, existingUser.password);
            if (passwordMatch) {
              return {
                id: existingUser.id,
                email: existingUser.email,
                name: existingUser.name
              };
            }
          }

          // Create user if not exists
          const hashed = await bcrypt.hash(credentials?.password, 10);
          const newUser = await prisma.user.create({
            data: {
              number: credentials?.number,
              password: hashed
            }
          });

          return {
            id: newUser.id,
            email: newUser.email,
            name: newUser.name
          };

        } catch (error: any) {
          console.log(error);
          return null;
        }
      }
})
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ token, session }: any) {
      session.user.id = token.sub
      return session
    }
  }
}