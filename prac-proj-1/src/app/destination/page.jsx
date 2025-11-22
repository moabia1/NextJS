"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

const page = () => {

  const router = useRouter();
  const destinations = ["paris", "tokyo", "new-york"];
  return (
    <div className="flex items-center justify-center h-full text-white gap-4 flex-col">
      <div className='font-semibold text-2xl'>Choose your Destination</div>
      <div className='flex gap-4 flex-col'>
        {destinations.map((dest, ind) => (
          <div key={ind}
            onClick={()=> router.push(`/destination/${dest}`)}
            className='text-white font-bold flex items-center justify-center px-5 py-5 bg-zinc-400  rounded-lg'>
            <h1 className="text-2xl capitalize">{dest}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page