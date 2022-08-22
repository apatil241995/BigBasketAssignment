import { combineReducers } from "@reduxjs/toolkit";
import CartReducer from "./cartReducer";
import FilterReducer from "./filterReducer";

const RootReducer = combineReducers({
  cart: CartReducer,
  filter: FilterReducer
})

export default RootReducer