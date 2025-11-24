"use client"
import React, { useEffect } from 'react'

const page = () => {
   // SSR
  // let response = await fetch('http://localhost:3000/api/user', { cache: "no-store" })

  //SSG
  //let response = await fetch('http://localhost:3000/api/user', { cache: "force-cache" })
  
  // ISR
  //let response = await fetch('http://localhost:3000/api/user',{next:{revalidate:5}})
  
  // CSR
  const handleAPI = async () => {
    let response = await fetch('/api/user')
    const data = await response.json()
    console.log(data)
  }

  useEffect(() => {
    handleAPI();
  },[])
  return (
    <div>
      
    </div>
  )
}

export default page