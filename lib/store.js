import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
