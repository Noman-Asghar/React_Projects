import { useEffect, useState } from 'react'
import './App.css'
// import axios from 'axios'
import  {useDispatch, useSelector} from "react-redux"
import { fetchProducts } from './redux/productsSlice'

function App() {
 
  // fetch products by redux

   const { products, isLoading, isError} = useSelector((state) => state.products)
  const dispatch = useDispatch()
  const [search, setSearch] = useState("")
console.log("Products:", products)

 const handleSearch = () => {
  dispatch(fetchProducts(search))
 }


 if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (isError) {
    return <h1>Error: {isError}</h1>
  }

// fetch products classis react method

  // const [products, setProducts] = useState([])
  // const [isLoading, setIsLoading] = useState(false)
  // const [error, setError] = useState(false)
  // const [search, setSearch] = useState("")


  // useEffect(() =>{
  //   const controller = new AbortController()
  //   ;(async() => {
  //     try {
  //        setIsLoading(true)
  //        setError(false)
  //       const result = await axios.get("/api/products?search=" + search, {
  //         signal:controller.signal
  //       })
  //       const response = result.data
  //       console.log(response);
        
  //       setProducts(response)
  //       setIsLoading(false)
  //     } catch (error) {
  //       if (axios.isCancel(error)) {
  //         console.log("Reaquest Cancel", error.message);
  //         return
  //       }
  //       setError(true)
  //       setIsLoading(false)
        
  //     }
  //   })()
  // }, [search])

  // if (error) {
  //   return <h1>Something Went Wrong</h1>
  // }

  // if (isLoading) {
  //   return <h1>Loading...</h1>
  // }



  
  return (
    <>
     <h1>Noman Asghar</h1>

     <button onClick={handleSearch}>{products.length === 0  ? "Show Products" : "Search" }</button>
      {products.length >= 1 && <input type="text" name=""  placeholder='Search your products' value={search} onChange={(e) => setSearch(e.target.value)} />   }
        <div className="product">
          {

       products &&  products.map((product) => (
          <div className='products' key={product.id}>
           <img src={product.image} alt="" />
             <h1>Name: {product.name}</h1>
         <p>Description: {product.description}</p>
         <p>Price: {product.price}</p>
          </div>
         ))
        }

           <h1>Products:{products.length}</h1> 
      </div>
    </>
  )
}

export default App
