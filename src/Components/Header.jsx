import React from 'react'
import logo  from "../assets/images/nebula-times-logo.png";

function Header() {
  return (
    <div>
      <header className="bg-gray-100 p-4 flex justify-between items-center">
        <div>
          <img src={logo} alt="Nebula Times Logo" className="w-60"/>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-900 font-semibold">Home</a>
            </li>
            <li>
              <a href="#" className="text-gray-900 font-semibold">About</a>
            </li>
            <li>
              <a href="#" className="text-gray-900 font-semibold">Contact</a>
            </li>
          </ul>
        </nav>
        <button className="bg-black-800 hover:bg-black-400 text-white font-bold py-2 px-4 rounded">
          Subscribe
        </button>
      </header> 
    </div>
  )
}

export default Header