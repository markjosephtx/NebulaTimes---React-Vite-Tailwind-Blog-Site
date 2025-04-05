import React, { useState } from 'react'
import banner from "../assets/images/space-banner-search.jpg"
import { CgSearch } from "react-icons/cg";


function Search() {
  const tags=[
    {id:1, name: 'All'},
    {id:2, name: 'Space'},
    {id:3, name: 'Technology'},
    {id:4, name: 'Science'},
    {id:5, name: 'Health'},
    {id:6, name: 'Environment'}
  ]
  const [activeIndex,setActiveIndex]=useState(0);

  return (
    <div className="flex flex-col justify-center bg-gray-100 p-8">
      <img src={banner} alt="Nebula Times Banner" className="w-full h-[300px] object-cover object-bottom rounded-2xl"/>
      <div className=' mx-[25%] gap-2 flex items-center mt-[-100px] rounded-md p-4 text-gray-900 font-semibold bg-gray-100 border-2 border-gray-200 focus:outline-none focus:border-purple-600 shadow-lg'>
        <CgSearch className='text-gray-400 text-[20px]'/>
        <input type='text' placeholder='Search' className='outline-none ml-2'/>
      </div>
      <div className='flex gap-10 justify-center items-center mt-8 p-4'>
        {tags.map((item,index)=>(
          <ul onClick={()=>setActiveIndex(item.id)} className={`flex gap-4 mt-4 cursor-pointer p-2 rounded-sm md:rounded-full text-sm md:px-4 hover:scale-110 hover:border-[2px] border-purple-500 transition-all duration-100 ease-in-out ${activeIndex === item.id ? 'bg-purple-600 font-semibold text-white' : 'text-gray-500'}`} key={item.id}>
            <il>{item.name}</il>
          </ul>
        ))}
      </div>

    </div>
  )
}

export default Search