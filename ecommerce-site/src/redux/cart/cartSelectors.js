import { createSelector } from "reselect";

// Input selector returns a tiny slice of the state.
const selectCart = (state) => state.cart;

// Because we used createSelector we are now caching the value of cartItems.
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectTotalCartItems = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (runningTotal, cartItem) => runningTotal + cartItem.quantity,
      0
    )
);
