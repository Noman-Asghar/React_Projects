import React from 'react'
import carImg from "../assets/banner-user-image-04.png"

const Cart = ({username , image}) => {
  return (
    <div>
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src={image || carImg}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
           {username}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
      </div>
    </div>
  )
}

export default Cart
