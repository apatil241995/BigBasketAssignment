import { combineReducers } from "@reduxjs/toolkit";
import CartReducer from "../cartReducer/cartReducer";
import FilterReducer from "../filterReducer/filterReducer";
import SearchReducer from '../searchReducer/searchReducer'


const RootReducer = combineReducers({
  cart: CartReducer,
  filter: FilterReducer,
  search: SearchReducer
})

export default RootReducer