import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const cartItem = useSelector((state) => state.carts.items)

  return (
    <nav className='bg-orange-400 text-white font-bold shadow-2xl rounded-b-lg h-20 flex justify-between px-10 py-3 items-center text-lg'>
      <div className="text-2xl">Noman Asghar</div>

      <div className="flex gap-5">
        {/* Home Link */}
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? "text-gray-600" : "text-white"}
        >
          Home
        </NavLink>

        {/* Cart Link */}
        <NavLink
          to="/cart"
          className={({ isActive }) => isActive ? "text-gray-600" : "text-white"}
        >
          Cart <span className='text-red-700'>({cartItem.length})</span>
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
