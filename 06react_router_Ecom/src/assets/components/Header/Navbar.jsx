import React, { useState } from 'react'
import { MdMenu } from 'react-icons/md'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    const [menu , setMenu] = useState(false)

    const handletoggleNav = () => {
        setMenu(!menu)
    }
  return (
    <header>
        <nav>
            <div className="md:hidden ps-2 w-full p-2 shadow-lg" onClick={handletoggleNav}><MdMenu className='w-10 h-10' /></div>
              <div className={`transition-all duration-600 ease-in-out overflow-hidden md:max-h-24 ${menu ? "max-h-80 opacity-100" :"max-h-0 opacity-0"} flex  flex-col  lg:opacity-100 justify-center  md:flex-row md:items-center w-full md:justify-around  shadow-2xl font-bold px-3 py-6 `}>
            <div className="font-bold text-black md:text-medium lg:text-3xl hidden md:block">Noman <span className='text-orange-500 '>Asghar</span> <span className='text-[20px] relative bottom-6'>©</span></div>
            <div>
                <ul className='flex gap-4 items-center  flex-col text-[13px] md:text-[12px] lg:text-[18px]  md:flex-row text-gray-700'>
                    <li>
                        <NavLink to="/"className={({isActive}) => `${isActive ? "text-orange-600" : "text-gray-700"}`} >
                            Home
                        </NavLink>
                    </li>
                     <li>
                        <NavLink to="/about"className={({isActive}) => `${isActive ? "text-orange-600" : "text-gray-700"}`} >
                            About
                        </NavLink>
                    </li>
                     <li>
                        <NavLink to="/contact"className={({isActive}) => `${isActive ? "text-orange-600" : "text-gray-700"}`} >
                            Contact
                        </NavLink>
                    </li>
                     <li>
                        <NavLink to="/profile"className={({isActive}) => `${isActive ? "text-orange-600" : "text-gray-700"}`}>
                            Profile
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to="/products" className={({isActive}) => `${isActive ? "text-orange-600" : "text-gray-700"}`}>
                            Products
                        </NavLink>
                    </li>

                    
                </ul>
            </div>

            <div className="flex gap-1 md:gap-4 flex-col md:flex-row items-center md:items-start text-[14px] md:text-medium lg:text-xl">
                <button className='rounded-lg p-2 duration-200 hover:border-4 hover:border-orange-500'><span className='font-bold text-orange-500'>Get</span> Started</button>
                <button className='rounded-lg p-2 duration-200 hover:border-4 hover:border-orange-500 text-orange-500'>Login</button>
            </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
