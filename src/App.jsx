import CartContainer from './components/CartContainer'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { calculateTotals } from './features/cart/cartSlice'

export default function App() {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((state) => state.cart)

  useEffect(() => {
    dispatch(dispatch(calculateTotals))
  }, [cartItems])

  return (
    <div>
      <header className='bg-blue-900 flex justify-center'>
        <Navbar />
      </header>
      <main className='container flex flex-col justify-center items-center mt-4'>
        <CartContainer />
      </main>
    </div>
  )
}
