"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const page = ({ params }) => {
  const { city } = useParams()

  return (
    <div className='mt-24'>
      {city} is the beautiful city.
    </div>
  )
}

export default page