import CartIcon from '../icons/CartIcon'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const { amount } = useSelector((state) => state.cart)
  return (
    <nav className='w-3/5 py-2 flex justify-between items-center text-white'>
      <h2 className='text-2xl'>Shopping Cart</h2>
      <div className='flex relative'>
        <CartIcon />
        <h2 className='cart-amount'>{amount}</h2>
      </div>
    </nav>
  )
}
export default Navbar
