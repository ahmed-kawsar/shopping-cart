import { createSlice } from '@reduxjs/toolkit'
import cartItems from '../../cartItems'

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = []
    },
    removeItem: (state, { payload }) => {
      const itemId = payload.id
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
    },
    increase: (state, { payload }) => {
      const itemId = payload.id
      const specificItem = state.cartItems.find((item) => item.id === itemId)
      specificItem.amount += 1
    },
    decrease: (state, { payload }) => {
      const itemId = payload.id
      const specificItem = state.cartItems.find((item) => item.id === itemId)
      specificItem.amount -= 1
    },
    calculateTotals: (state) => {
      let amount = 0
      let total = 0
      state.cartItems.forEach((item) => {
        amount += item.amount
        total += item.amount * item.price
      })
      state.amount = amount
      state.total = total
    },
  },
})

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions
export default cartSlice.reducer
