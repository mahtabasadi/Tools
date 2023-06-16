const removeProductFromCart = (state, payload) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === payload.id
  );
  const updatedItem = { ...updatedCart[updatedItemIndex] };
  if (updatedItem.quantity === 1) {
    const filteredCart = updatedCart.filter((item) => item.id !== payload.id);
    return {
      ...state,
      cart: filteredCart,
      total: state.total - payload.offPrice,
    };
  } else {
    updatedItem.quantity--;
    updatedCart[updatedItemIndex] = updatedItem;
    return {
      ...state,
      cart: updatedCart,
      total: state.total - payload.offPrice,
    };
  }
};
