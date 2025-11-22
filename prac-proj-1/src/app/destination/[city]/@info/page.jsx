"use client"
import { useParams } from 'next/navigation';
import React from 'react'

const page = () => {

  const { city } = useParams();
  
  return (
    <div className='mt-24'>{city} is good to visit</div>
  )
}

export default page