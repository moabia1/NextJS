import React from 'react'

const page = async ({ params }) => {
  const {username} = await params
  return (
    <div>Dynamic profile - {username}</div>
  )
}

export default page