import { connectMongodb } from "@/lib/mongodb";
import NextAuth from "next-auth/next";
import User from "@/models/user";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs'

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials) {
                const { email, password } = credentials;

                try {
                    await connectMongodb();
                    console.log("email" + email);
                    console.log("pass" + password);

                    const usr = await User.findOne({ email })
                    console.log("done");

                    if (!usr) {
                        return null;
                    }
                    const passMatch = await bcrypt.compare(password, usr.password)

                    if (!passMatch)
                        return null;

                    return usr;
                } catch (error) {
                    console.log("error getting creds" + error)
                }

                return;
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

export { handler as GET, handler as POST };