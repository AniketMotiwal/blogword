import React from 'react'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
<footer className="bg-[#0e0e0e] text-white transition duration-300 ease-in-out mt-12"> {/* Added mt-12 to create space */}
  <div className="mx-auto max-w-screen-xl p-4 py-6 lg:py-8"> {/* Removed w-full and added max-w-screen-xl */}
    <nav className="flex justify-between items-center mb-6 md:mb-0">
      <a href="#" className="flex items-center">
        <img src="/small.png" className="h-8 me-3" alt="" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Blog</span>
      </a>
      <ul className="flex space-x-4 text-gray-500 dark:text-gray-400 font-medium">
        <li>
          <Link to="/" className="hover:underline text-white hover:text-blue-500 hover:cursor-pointer">Home</Link>
        </li>
        <li>
          <Link to="/myposts/:id" className="hover:underline text-white hover:text-blue-500 hover:cursor-pointer">Dashboard</Link>
        </li>
        
      </ul>
    </nav>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div className="sm:flex sm:items-center sm:justify-between transition duration-300 ease-in-out">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024<a href="#" className="hover:underline">Aniket Motiwal</a>. All Rights Reserved.</span>
      <div className="flex mt-4 sm:justify-center sm:mt-0">
   
        <a href="https://discord.com/" className="hover:text-red-500 dark:hover:text-white ms-5 hover:cursor-pointer">
         Discord
        </a>
        <a href="https://github.com/" className="text-white hover:text-red-500 dark:hover:text-white ms-5 hover:cursor-pointer">
          Github
        </a>
        <a href="#" className="text-white hover:text-gray-900 dark:hover:text-white ms-5 hover:cursor-pointer">
        
        </a>
      </div>
    </div>
  </div>
</footer>



  )
}

export default Footer





