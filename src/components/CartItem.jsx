import MinusIcon from '../icons/MinusIcon'
import PlusIcon from '../icons/PlusIcon'
import { useDispatch } from 'react-redux'
import { decrease, increase, removeItem } from '../features/cart/cartSlice'

const CartItem = ({ id, title, price, img, amount }) => {
  const dispatch = useDispatch()
  return (
    <article className='flex items-center border p-1 rounded'>
      <img src={img} alt={title} className='w-16' />
      <div className='ml-4'>
        <h4 className='text-md'>{title}</h4>
        <p className='text-sm'>Price: {price}</p>
        <button
          onClick={() => dispatch(removeItem({ id }))}
          className='text-red-400 hover:text-red-500'
        >
          remove
        </button>
      </div>
      <div className='ml-auto flex gap-2 items-center'>
        <button
          onClick={() => {
            if (amount === 1) {
              return dispatch(removeItem({ id }))
            }
            return dispatch(decrease({ id }))
          }}
        >
          <MinusIcon role='button' />
        </button>
        <p className='text-lg font-semibold'>{amount}</p>
        <button onClick={() => dispatch(increase({ id }))}>
          <PlusIcon />
        </button>
      </div>
    </article>
  )
}
export default CartItem
