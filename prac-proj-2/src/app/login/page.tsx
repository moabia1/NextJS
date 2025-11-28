"use client";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();


  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await signIn("credentials", { email, password});
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-md border-2 p-8 border-white rounded-2xl shadow-lg bg-gray-900">
        <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>
        <form onSubmit={handleSignIn} className="space-y-6">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full border-b border-white text-white px-1 py-2 outline-none placeholder-gray-400 bg-gray-900"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border-b border-white text-white px-1 py-2 outline-none placeholder-gray-400 bg-gray-900"
            />
          </div>
          <p className="text-sm text-center mt-1">
            Don't have an Account ?{" "}
            <span
              onClick={() => router.push("/register")}
              className="text-blue-400 hover:underline cursor-pointer"
            >
              Create account
            </span>
          </p>
          <button className="w-full px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
            Login
          </button>
        </form>
        <div className="flex items-center gap-2 justify-center my-5">
          <hr className="grow border-gray-500" />
          <span>OR</span>
          <hr className="grow border-gray-500" />
        </div>

        <button
          onClick={async () => {
            await signIn("google", {
              callbackUrl:'/'
            });
          }}
          className="w-full flex items-center gap-2 justify-center py-2 px-4 border border-gray-400 rounded-lg bg-white text-black hover:bg-gray-200 transition-color cursor-pointer"
        >
          <FcGoogle />
          <span>Sign In with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
