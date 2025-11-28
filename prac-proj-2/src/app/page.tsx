"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { HiPencil } from "react-icons/hi";
import { useState } from "react";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data } = useSession();
  const [loading, setLoading] = useState(false)
  const router = useRouter();

  const handleSignOut = async () => {
    setLoading(true)
    try {
      await signOut()
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  console.log(data);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      {data && (
        <div className="w-full max-w-md border-2 border-white rounded-2xl p-8 shadow-lg text-center relative flex flex-col items-center">
          <HiPencil size={22} color="white" className="absolute right-5 top-5 cursor-pointer" onClick={()=>router.push("/edit")}/>
          {data?.user?.image && (
            <div className="relative w-32 h-32 rounded-full border-2 border-white overflow-hidden">
              <Image src={data?.user?.image} fill alt="userImage" />
            </div>
          )}
          <h1 className="text-x2l font-semibold my-4">Welcome, {data?.user?.name}</h1>
          <button onClick={handleSignOut} className="w-full py-2 bg-white rounded-md text-black font-semibold text-xl cursor-pointer hover:bg-gray-200">Sign Out</button>
        </div>
        
      )}
      {!data && <div className="text-white text-2xl">Loading....</div>}
    </div>
  );
}
