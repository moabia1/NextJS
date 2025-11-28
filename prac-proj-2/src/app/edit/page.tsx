"use client"
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { CgProfile } from "react-icons/cg";

const Edit = () => {

  const { data } = useSession();
  const [name, setName] = useState("")
  const [frontImg, setFrontImg] = useState("")
  const [backImg, setBackImg] = useState<File>()
  const imageInput = useRef<HTMLInputElement>(null)

  const handleImage = (e:ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length == 0)return
    const file = files[0]
    setBackImg(file)
    setFrontImg(URL.createObjectURL(file))
  }

  useEffect(() => {
    if (data) {
      setName(data.user.name as string)
      setFrontImg(data.user.image as string)
    }
  },[data])
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-md rounded-2xl border-2 border-white shadow-lg p-8">
        <h1 className="text-2xl font-semibold text-center mb-2">
          Edit Profile
        </h1>
        <form className="space-y-2 flex flex-col w-full items-center">
          <div onClick={()=>imageInput.current?.click()} className="w-24 h-24 rounded-full border-2 flex justify-center items-center border-white transition-all hover:border-blue-500 text-white hover:text-blue-500 cursor-pointer overflow-hidden  relative">
            <input type="file" accept='image/*' hidden ref={imageInput} onChange={handleImage}/>
            {frontImg ? (
              <Image src={frontImg} fill alt="image"  />
            ) : (
              <CgProfile size={22} color="white" />
            )}
          </div>

          <div className='w-full'>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full border-b border-white text-white px-1 py-2 outline-none placeholder-gray-400 bg-black"
            />
          </div>
          <button className='w-full py-2 text-xl px-4 font-semibold bg-white text-black rounded-lg hover:bg-gray-200 transition-color cursor-pointer'>Save</button>
        </form>
      </div>
    </div>
  );
}

export default Edit