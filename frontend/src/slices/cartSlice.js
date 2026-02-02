import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/updateState";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : {
      cartItems: [],
      itemsPrice: 0,
      shippingPrice: 0,
      taxPrice: 0,
      totalPrice: 0,
      shippingAddress: {},
      paymentMethod: "Paypal",
    };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const incomingQty = Number(item.qty);
      const existItem = state.cartItems.find((x) => x._id === item._id);

      if (existItem) {
        const newQty = incomingQty + Number(existItem.qty);
        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id ? { ...existItem, qty: newQty } : x,
        );
      } else {
        state.cartItems.push({ ...item, qty: incomingQty });
      }
      return updateCart(state);
    },
    removeItem(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload,
      );
      return updateCart(state);
    },
  },
});
export const { addToCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
