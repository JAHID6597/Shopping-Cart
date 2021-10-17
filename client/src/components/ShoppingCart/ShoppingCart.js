import React, { useReducer, useEffect } from 'react';
import Body from './Body/Body';
import Header from './Header/Header';
import shoppingCartReducer from './shoppingCartReducer';

const BASE_ENDPOINT = 'https://fakestoreapi.com/products';

const initialState = {
  products: [],
  cart: [],
  currentCartItems: 0,
  totalPrice: 0,
  isLoading: true,
  shoppingCartModal: false,
  productDetailsModal: false,
  selectedProduct: {}
};

const ShoppingCart = () => {
  const [productState, dispatch] = useReducer(
    shoppingCartReducer,
    initialState
  );
  const {
    products,
    cart,
    currentCartItems,
    totalPrice,
    isLoading,
    shoppingCartModal,
    productDetailsModal,
    selectedProduct
  } = productState;

  useEffect(() => {
    fetch(BASE_ENDPOINT)
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'GET_ALL_PRODUCTS', payload: data }));
  }, []);

  /* INCREMENT PRODUCT QUANTITY INTO CART */
  const handleProductIncrement = (item) => {
    dispatch({ type: 'INCREMENT_PRODUCT_QUANTITY_INTO_CART', payload: item });
  };
  /* INCREMENT PRODUCT QUANTITY INTO CART */

  /* DECREMENT PRODUCT QUANTITY INTO CART */
  const handleProductDecrement = (item) => {
    dispatch({ type: 'DECREMENT_PRODUCT_QUANTITY_INTO_CART', payload: item });
  };
  /* DECREMENT PRODUCT QUANTITY INTO CART */

  /* HANDLE SHOPPING CART MODAL */
  const handleShoppingCartModal = (activity) => {
    dispatch({ type: 'HANDLE_SHOPPING_CART_MODAL', payload: activity });
  };
  /* /HANDLE SHOPPING CART MODAL */

  /* HANDLE PRODUCT DETAILS MODAL */
  const handleProductDetailsModal = (activity, product) => {
    dispatch({ type: 'HANDLE_PRODUCT_DETAILS_MODAL', payload: { activity, product } });
  };
  /* /HANDLE PRODUCT DETAILS MODAL */

  /* HANDLE DELETE SINGLE ITEM */
  const handleDeleteSingleItem = (item) => {
    dispatch({ type: 'HANDLE_DELETE_SINGLE_ITEM', payload: item });
  };
  /* /HANDLE DELETE SINGLE ITEM */

  return (
    <>
      <Header
        currentCartItems={currentCartItems}
        shoppingCartModal={shoppingCartModal}
        handleShoppingCartModal={handleShoppingCartModal}
        cart={cart}
        totalPrice={totalPrice}
        handleProductIncrement={handleProductIncrement}
        handleProductDecrement={handleProductDecrement}
        handleDeleteSingleItem={handleDeleteSingleItem}
      />
      <Body
        products={products}
        productDetailsModal={productDetailsModal}
        selectedProduct={selectedProduct}
        handleProductDetailsModal={handleProductDetailsModal}
        cart={cart}
        totalPrice={totalPrice}
        isLoading={isLoading}
        handleProductIncrement={handleProductIncrement}
        handleProductDecrement={handleProductDecrement}
      />
    </>
  );
};

export default ShoppingCart;
