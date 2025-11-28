import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import connectDB from "./db"
import User from "@/models/user.model"
import bcrypt from "bcryptjs"
import Google from "next-auth/providers/google"

const authOptions:NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: 'Email', type: 'text' },
        password:{label:'Password',type:'password'}
      },
      async authorize(credentials, req) {
        let email = credentials?.email
        let password = credentials?.password
        if (!email || !password) {
          throw new Error("Email or Password not Found")
        }

        await connectDB()

        let user = await User.findOne({ email })
        if (!user) {
          throw new Error("User not exists")
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
          throw new Error("Password is Incorrect")
        }

        return {
          id: user._id,
          name: user.name,
          email: user.email,
          image:user.image
        }
      },

    }),
    Google({
      clientId:process.env.GOOGLE_CLIENT_ID!,
      clientSecret:process.env.GOOGLE_CLIENT_SECRET!,
    })
  ],
  callbacks: {
    async signIn({account,user}) {  
      if (account?.provider === "google") {
        await connectDB()
        let existUser = await User.findOne({ email: user?.email })
        if (!existUser) {
          existUser = await User.create({
            email: user?.email,
            name: user?.name
          })
        }
        user.id = existUser?._id as string
      }
      return true
    },
    async jwt({token,user}) {
      if (user) {
        token.id = user.id
        token.name = user.name
        token.email = user.email
        token.image = user.image
      }
      return token
    },
    session({ session, token }) {
      if (session.expires) {
        session.user.id = token.id as string
        session.user.name = token.name
        session.user.email = token.email
        session.user.image = token.image as string
      }
      return session
    }
  },

  session: {
    strategy: 'jwt',
    maxAge:3 * 24 * 60 * 60 * 1000
  },
  pages: {
    signIn: "/login",
    error:"/login"
  },
  secret:process.env.NEXT_AUTH_SECRET
}

export default authOptions