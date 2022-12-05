import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice'
import CartItem from './CartItem'

const CartContainer = () => {
  const { cartItems, amount, total } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  if (amount < 1) {
    return (
      <section className='sm:w-4/5 md:w-3/5 p-2 flex flex-col'>
        <h2 className='text-center text-xl font-bold'>Your Cart</h2>
        <p className='text-center text-sm'>Currently Empty</p>
      </section>
    )
  }
  return (
    <section className='sm:w-4/5 md:w-3/5 p-2 flex flex-col'>
      <h2 className='text-center text-xl font-bold'>Your Cart</h2>
      <div className='mt-3 flex gap-1 flex-col'>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <hr className='mt-3' />
      <section className='flex justify-between mb-3 px-3'>
        <p className='text-xl'>total:</p>
        <p className='text-xl font-semibold'>${total.toFixed(2)}</p>
      </section>
      <button className='remove-btn' onClick={() => dispatch(clearCart())}>
        clear cart
      </button>
    </section>
  )
}
export default CartContainer
