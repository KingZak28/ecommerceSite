import { cartActionTypes } from "./cartTypes";

// We don't need a payload because inside the reducer we just switch it from the previous state.
export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});
