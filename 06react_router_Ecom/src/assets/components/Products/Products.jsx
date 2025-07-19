import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Products = () => {

    const [products , setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((res) => setProducts(res))

    })
  return (
    <div className="py-4">
        <h1 className='text-4xl text-orange-500 text-center py-3 font-bold'>PRODUCTS</h1>
    <div className='w-full flex flex-wrap justify-around gap-3'>
      {
        products?.map((product) => (
             <Link key={product.id} to={`/products/${product.id}`}>
            <div className="text-black bg-gray-300 rounded-lg"  style={{boxShadow : '4px 4px 4px 4px'}}>
                <div className="flex flex-col pt-1 items-baseline w-[400px] h-[550px]  ">
                    <img src={product.image} alt="" className='w-[100%] h-[60%] object-cover' />
                    <div className="px-2 pt-4">
                        <h1 className='text-xl font-bold '>{product.title}</h1>
                    <p className='text-lg font-bold'>{product.category}</p>
                    <p className='text-lg font-bold'>{product.price}</p>
                     <button className='bg-black transition-all duration-200 mt-2 py-3 px-6 rounded-lg text-orange-600 hover:border-4 hover:border-orange-600'>Shop Now</button>
                    </div>
                  
                    
                </div>
            </div>
            </Link>
        ))
      }
    </div>
    </div>
  )
}

export default Products
