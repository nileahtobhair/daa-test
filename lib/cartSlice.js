"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems = [
        ...state.cartItems,
        { ...action.payload, quantity: 1 },
      ];
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    increaseQuantity: (state, action) => {
      const changeIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      const newItems = [...state.cartItems];
      newItems[changeIndex].quantity = action.payload.quantity + 1;
      state.cartItems = newItems;
    },
    decreaseQuantity: (state, action) => {
      const changeIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      const newItems = [...state.cartItems];
      newItems[changeIndex].quantity =
        action.payload.quantity > 1 ? action.payload.quantity - 1 : 1;
      state.cartItems = newItems;
    },
    emptyCart: () => {
      state.cartItems = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  emptyCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
