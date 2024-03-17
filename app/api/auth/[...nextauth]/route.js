import NextAuth from "next-auth/next";
import { CredentialsProvider } from "next-auth/providers/credentials";
//import CredentialsProvider from "next-auth/providers/credentials";


const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            
            async authorize(credentials){
                const user = {id: "1"};
                return user;
            }
        })
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {  //using homepage for login
        signIn: "/",
    },
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST};