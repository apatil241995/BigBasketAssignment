import * as actionTypes from '../actionTypes'
const initialState = {
  cartProduct: 0
}

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: return {
      ...state,
      cartProduct: state.cartProduct + 1
    }
    case actionTypes.REMOVE_FROM_CART: return {
      ...state,
      cartProduct: state.cartProduct - 1
    }
    default: return state
  }
}

export default CartReducer