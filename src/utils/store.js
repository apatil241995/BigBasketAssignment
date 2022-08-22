import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "../modules/reducers/rootRducer/rootReducer";

const store = configureStore({
  reducer: RootReducer
})

export default store
