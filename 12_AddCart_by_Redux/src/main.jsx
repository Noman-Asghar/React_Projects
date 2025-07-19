import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import ProductList from './components/ProductList.jsx'
import Cart from './components/Cart.jsx'
import { RouterProvider } from 'react-router/dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        index: true,
        element: <ProductList />
      },
      {
        path: "cart",
        element: <Cart />
      }
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
