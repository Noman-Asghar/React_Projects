import React, { useEffect, useState } from 'react'


const Profile = () => {
const [data , setData] = useState('')
useEffect( () => {
     fetch("https://api.github.com/users/Noman-Asghar")
    .then((res) => res.json())
    .then((data) => setData(data) )
}, [] )
  return (
<div className="w-full py-[100px]  bg-gray-400 flex justify-center items-center">
<div className="p-5 flex flex-col rounded-xl transition-all duration-300 hover:bg-blue-400  hover:text-white bg-amber-50 gap-3" style={{boxShadow: '4px 4px 4px 4px'}}>
  <img src={data.avatar_url} alt="" className='rounded-lg' />
  <p className='text-3xl font-bold '><span>Name: </span>{data.login}</p>
  <p className='text-lg font-bold'>Bio: {data.bio}</p>
  <p className='text-xl font-bold'>Publich Repos: {data.public_repos}</p>
</div>

</div>
  )
}

export default Profile


