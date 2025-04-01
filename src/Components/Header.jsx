import React from 'react'
import logo  from "../assets/images/nebula-times-logo.png"
import { FaAngleRight } from "react-icons/fa";


function Header() {
  return (
    <div>
      <header className="bg-gray-100 p-4 flex justify-between items-center">
        <div>
          <img src={logo} alt="Nebula Times Logo" className="w-[180px]"/>
        </div>
        <nav>
          <ul className="flex gap-4 md:gap-14">
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-600 hover:font-bold cursor-pointer">Home</a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-600 hover:font-bold cursor-pointer">About</a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-600 hover:font-bold cursor-pointer">Contact</a>
            </li>
          </ul>
        </nav>
        <button className="text-gray-100 bg-purple-800 px-4 py-2 rounded-full hover:bg-purple-700 flex items-center">Subscribe<FaAngleRight className='ml-3'/></button>
      </header> 
    </div>
  )
}

export default Header