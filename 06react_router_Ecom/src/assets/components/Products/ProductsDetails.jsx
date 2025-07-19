import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductsDetails = () => {
    const { id } = useParams()
    const [product, setProducts] = useState(null)

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res => res.json()))
            .then((res) => setProducts(res))
    }, [id])

    if (!product) return <p className="p-6">Loading...</p>;
    return (
        <div className="w-full my-[100px] ">
        <div className='flex justify-center md:flex-row flex-col gap-0 md:gap-[80px]  '>
            <div className="md:w-1/4 w-full px-5 md:px-0">
                <img src={product.image} alt="" className='w-[100%] object-cover h-[50%] md:h-[100%]' />
            </div>
            <div className=" md:w-1/2 w-full flex px-5 md:px-2 mt-[50px] flex-col gap-5  pt-4">
                <h1 className='text-3xl font-bold '>{product.title}</h1>
                 <p className='text-lg'>{product.description}</p>
                <p className='text-xl font-bold'>{product.category}</p>
                <p className='text-xl font-bold'><span className='text-black text-lg font-bold'>PRICE: </span>{product.price}</p>
                <button className='bg-black mt-[50px] transition-all duration-200 w-[300px] h-[70px] py-3 px-6 rounded-lg text-orange-600 hover:border-4 hover:border-orange-600'>Shop Now</button>
            </div>
        </div>
        </div>
       
    )
}

export default ProductsDetails
