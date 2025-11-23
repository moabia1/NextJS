"use client"
import React, { useState } from 'react'
import Button from "@/Button"

const page = () => {
  const [count, setcount] = useState<number>(0)

  const fn = () => {
    
  }
  return (
    <div>
      <Button count="3" action={fn}/>
    </div>
  )
}

export default page