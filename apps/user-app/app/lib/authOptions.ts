import CredentialsProvider from "next-auth/providers/credentials";
import db from "@repo/db/client"

providers: [
  CredentialsProvider({
    name: "Number",
    credentials: {
      name : {label : "name", type:"text", placeholder:"John"},  
      number: { label: "number", type: "number", placeholder: "1234567890" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
      
      const credentialUser = credentials?.name  
      const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }

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