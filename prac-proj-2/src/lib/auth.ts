import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import connectDB from "./db"
import User from "@/models/user.model"
import bcrypt from "bcryptjs"

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

    })
  ],
  callbacks:{},
}

export default authOptions