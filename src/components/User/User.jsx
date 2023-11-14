import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {name} = useParams();
  return (
    <div
    className='text-white text-center bg-gray-700 text-3xl py-3'
    >User : {name}</div>
  )
}

export default User