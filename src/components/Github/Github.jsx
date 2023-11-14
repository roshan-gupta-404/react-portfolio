import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data,setData] = useState('');
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/roshan-gupta-404')
    //     .then((res)=>res.json())
    //     .then((res)=>setData(res))
    // },[])
  return (
    <div
    className='text-white text-center bg-gray-700 text-3xl py-3'
    >Followers : {data.followers} | Following : {data.following}
    <img src={data.avatar_url}/>
    </div>
  )
}

export const githubInfoLoader = async ()=>{
   const res = await fetch('https://api.github.com/users/roshan-gupta-404')
    return res.json();
}

export default Github
