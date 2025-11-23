"use client"
import { HtmlContext } from 'next/dist/server/route-modules/pages/vendored/contexts/entrypoints'
import React, { useRef } from 'react'

type prop = {
  count: string,
  action:()=>void
}
const button = ({ count, action }: prop) => {
  
  const inputRef = useRef<HTMLInputElement>(null)

  const submitHandler = (e:React.FormEvent) => {
    e.preventDefault();
  }

  const changeHandler = (e:React.ChangeEvent) => {
    
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" ref={inputRef} onChange={changeHandler} />
      </form>
    </div>
  )
}

export default button