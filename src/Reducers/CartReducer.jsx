/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { createAction } from "../utils/action/action.js";
const addCartItem = (cartItems, productToAdd) => {
  //finding if cart having productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  //adding to existing product
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //return new array if product to add is a new item to cart...
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const removeCartItem = (cartItems, productToRemove) => {
  //to find the existing product
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );
  // to remove if product exists
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }
  // return back items with reduced quanity
  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
const deleteCartItem = (cartItems, productToDelete) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id);
};
export const cartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeItemToCart: () => {},
  deleteItemToCart: () => {},
  total: 0,
});
// Initial
const INITIAL_STATE = {
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};
// Types
const CART_ACTION_TYPES = {
  ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
};
const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.ADD_ITEM_TO_CART:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};
export const CartProvider = ({ children }) => {
  const [{ cartItems, cartCount, cartTotal }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );
  // New Update for cart Reducer
  const updateCartItem = (newCartItems) => {
    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );                   
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    dispatch(
      createAction(CART_ACTION_TYPES.ADD_ITEM_TO_CART, {
        cartCount: newCartCount,
        cartItems: newCartItems,
        cartTotal: newCartTotal,
      })
    );
  };
  // Action Creating Helper Functions
  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItem(newCartItems);
  };
  const removeItemToCart = (productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    updateCartItem(newCartItems);
  };
  const deleteItemToCart = (productToDelete) => {
    const newCartItems = deleteCartItem(cartItems, productToDelete);
    updateCartItem(newCartItems);
  };
  const value = {
    addItemToCart,
    cartItems,
    cartCount,
    removeItemToCart,
    deleteItemToCart,
    cartTotal,
  };
  return <cartContext.Provider value={value}> {children}</cartContext.Provider>;
};

