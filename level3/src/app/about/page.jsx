import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      about page

      <Image src={"/vercel.svg"} alt='vercel' width={200} height={200}/>
    </div>
  )
}

export default page