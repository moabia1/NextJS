import React from 'react'

const layout = ({children,info}) => {
  return (
    <div className='flex justify-between px-10'>
      {children}
      {info}
    </div>
  )
}

export default layout