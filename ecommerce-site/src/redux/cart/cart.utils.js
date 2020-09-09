const exisitingCartItem = (cartItems, cartItemToSearch) => {
  return cartItems.find((cartItem) => cartItem.id === cartItemToSearch.id);
};

export const addItemToCart = (cartItems, cartItemToAdd) => {
  if (exisitingCartItem(cartItems, cartItemToAdd)) {
    // We need to return a new array so the component rerenders
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // If its not found we can add the cart items but each item is initialized with a quantity of 1.
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const itemInCart = exisitingCartItem(cartItems, cartItemToRemove);

  //Remove items once this is called and it is at 1.
  if (itemInCart.quantity === 1) {
    // Keep the items that arent equal to the cart item to remove
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
