export const addItemToCart = (cartItems, cartItemToAdd) => {
  const exisitingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (exisitingCartItem) {
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
