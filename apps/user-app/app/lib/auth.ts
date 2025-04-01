import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    providers: [
        CredentialsProvider({
          name: "Mobile Number",
          credentials: {
            number: { label: "Mobile Number:", type: "number", placeholder: "123123123" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            const number = credentials?.number
            const password = credentials?.password

            if (user) {
              // Any object returned will be saved in `user` property of the JWT
              return user
            } else {
              // If you return null then an error will be displayed advising the user to check their details.
              return null
      
              // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
            }
          }
        })
      ]
      
}