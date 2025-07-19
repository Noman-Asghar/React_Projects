import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/Product.slice'
import { addToCart } from '../redux/cart.slice'


const ProductList = () => {

    

    const dispatch = useDispatch()
const { products, isLoading, isError } = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(fetchProducts())
    },[dispatch])

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (isError) {
        return <h1>Error: {isError}</h1>
    }

  return (
    <>
    <h1 className="text-4xl font-bold text-white bg-gray-900 text-center py-6 shadow">
        Product List
      </h1>

      <div className="min-h-screen bg-gray-900 px-4 py-10">
        <div className="flex flex-wrap justify-center gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white text-black rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col p-4 w-full sm:w-[45%] md:w-[30%] lg:w-[22%] min-h-[550px]"
            >
              <div className="h-64 w-full flex items-center justify-center bg-gray-100 mb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h2 className="text-lg font-bold mb-2">{product.title}</h2>
              <p className="text-sm text-gray-700 mb-3 overflow-hidden line-clamp-3">
                {product.description}
              </p>
              <p className="text-xl font-bold text-red-600 mb-4">${product.price}</p>
              <div className="flex justify-between mt-auto">
                <button className="bg-blue-700 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-800">
                  Buy Now
                </button>
                <button onClick={() => dispatch(addToCart(product))} className="bg-amber-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-amber-600">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ProductList
