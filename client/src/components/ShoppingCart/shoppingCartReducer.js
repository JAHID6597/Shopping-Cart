const shoppingCartReducer = (state, action) => {
  const { type, payload } = action;
  const { cart } = state;
  let { totalPrice, currentCartItems } = state;
  if (type === 'GET_ALL_PRODUCTS')
    return { ...state, products: payload, isLoading: false };
  else if (type === 'INCREMENT_PRODUCT_QUANTITY_INTO_CART') {
    currentCartItems++;
    totalPrice = parseFloat(
      parseFloat(totalPrice) + parseFloat(payload.price)
    ).toFixed(2);
    const productIndex = cart.findIndex((item) => item.id === payload.id);
    if (productIndex !== -1) {
      const currentCart = [
        ...cart.slice(0, productIndex),
        {
          ...cart[productIndex],
          quantity: cart[productIndex].quantity + 1,
          itemTotalPrice: parseFloat(
            (
              cart[productIndex].price *
              (cart[productIndex].quantity + 1)
            ).toFixed(2)
          ),
        },
        ...cart.slice(productIndex + 1),
      ];
      return {
        ...state,
        cart: [...currentCart],
        totalPrice,
        currentCartItems,
      };
    } else {
      payload.quantity = 1;
      payload.itemTotalPrice = parseFloat(payload.price).toFixed(2);
      return {
        ...state,
        cart: [payload, ...cart],
        totalPrice,
        currentCartItems,
      };
    }
  } else if (type === 'DECREMENT_PRODUCT_QUANTITY_INTO_CART') {
    if (currentCartItems === 0) return { ...state };
    currentCartItems--;
    const productIndex = cart.findIndex((item) => item.id === payload.id);
    if (cart[productIndex].quantity === 0) return { ...state };
    if (productIndex !== -1) {
      const currentCart = [
        ...cart.slice(0, productIndex),
        {
          ...cart[productIndex],
          quantity: cart[productIndex].quantity - 1,
          itemTotalPrice: parseFloat(
            (
              cart[productIndex].itemTotalPrice - cart[productIndex].price
            ).toFixed(2)
          ),
        },
        ...cart.slice(productIndex + 1),
      ];
      totalPrice = parseFloat(
        parseFloat(totalPrice) - parseFloat(cart[productIndex].price)
      ).toFixed(2);
      return {
        ...state,
        cart: [...currentCart],
        totalPrice,
        currentCartItems,
      };
    }
  } else if (type === 'HANDLE_SHOPPING_CART_MODAL') {
    return { ...state, shoppingCartModal: payload };
  } else if (type === 'HANDLE_PRODUCT_DETAILS_MODAL') {
    const { activity, product } = payload;
    return {
      ...state,
      productDetailsModal: activity,
      selectedProduct: { ...product },
    };
  } else if (type === 'HANDLE_DELETE_SINGLE_ITEM') {
    const currentCart = [...cart];
    const productIndex = currentCart.findIndex(
      (item) => item.id === payload.id
    );
    totalPrice = parseFloat(
      parseFloat(
        parseFloat(totalPrice) -
          parseFloat(currentCart[productIndex].itemTotalPrice)
      ).toFixed(2)
    );
    currentCartItems -= currentCart[productIndex].quantity;
    const newCart = currentCart.filter((item) => item.id !== payload.id);
    return {
      ...state,
      cart: [...newCart],
      totalPrice,
      currentCartItems,
    };
  } else return { ...state };
};

export default shoppingCartReducer;
