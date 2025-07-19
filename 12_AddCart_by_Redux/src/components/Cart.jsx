import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCart, updateCart } from '../redux/cart.slice'

const Cart = () => {
  const { items, totalPrice } = useSelector((state) => state.carts)
  const dispatch = useDispatch()

  //  Har item ki quantity ko state mein store karo
  const [quantities, setQuantities] = useState({})

  //  Items change hon to quantities set karo
  useEffect(() => {
    const initialQuantities = {}
    items.forEach(item => {
      initialQuantities[item.id] = item.quantity
    })
    setQuantities(initialQuantities)
  }, [items])

  //  Quantity change handle karo
  const handleQuantityChange = (id, value) => {
    setQuantities(prev => ({
      ...prev,
      [id]: value
    }))
  }

  return (
    <div className="min-h-screen bg-gray-200 text-black px-4 py-8">
      <div className="w-full max-w-3xl mx-auto shadow-xl bg-white rounded-lg p-6">
        <h1 className="text-4xl font-bold mb-6 text-center">Your Cart</h1>

        {items.length > 0 ? (
          items.map((cart) => (
            <div
              key={cart.id}
              className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b py-4"
            >
              <div className="h-24 w-24 flex-shrink-0">
                <img
                  src={cart.image}
                  alt={cart.title}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="flex-1">
                <h2 className="text-lg font-bold">{cart.title}</h2>
                <p className="text-xl font-bold text-red-600">${cart.price}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
                <input
                  type="number"
                  min="1"
                  value={quantities[cart.id] || 1}
                  onChange={(e) =>
                    handleQuantityChange(cart.id, parseInt(e.target.value))
                  }
                  className="border rounded-md px-2 py-1 w-20"
                />
                <button
                  onClick={() =>
                    dispatch(updateCart({ id: cart.id, quantity: quantities[cart.id] }))
                  }
                  className="bg-blue-600 py-2 px-4 rounded-lg text-white font-bold"
                >
                  Update
                </button>
                <button
                  onClick={() => dispatch(removeCart({ id: cart.id }))}
                  className="bg-red-600 py-2 px-4 rounded-lg text-white font-bold"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-lg font-semibold">Your cart is empty.</p>
        )}

        <div className="text-right mt-6 text-2xl font-semibold">
          Total: ${totalPrice.toFixed(2)}
        </div>
      </div>
    </div>
  )
}

export default Cart
