// /* eslint-disable no-unused-vars */
// import { createContext, useReducer } from "react";
// const addCartItem = (cartItems, productsToAdd) => {
//   //find item
//   const existingItem = cartItems.find(
//     (cartItem) => cartItem.id === productsToAdd.id
//   );
//   //if yes increase
//   if (existingItem) {
//     return cartItems.map((cartItem) =>
//       cartItem.id === productsToAdd.id
//         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//         : cartItem
//     );
//   }
//   //return modified array
//   return [...cartItems, { ...productsToAdd, quantity: 1 }];
// };
// export const CartContext = createContext({
//   cartItems: [],
//   addCartItems: () => {},
//   cartCount: 0,
// });

// const INITIAL_STATE = {
//   cartItems: [],
//   cartCount: 0,
// };

// const CART_ACTON_TYPES = {
//   SETCARTITEMS: "SET_CART_ITEMS",
// };

// export const CartReducer = (state, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case CART_ACTON_TYPES.SETCARTITEMS:
//       return {
//         ...state,
//         ...payload,
//       };
//     default:
//       throw new Error(`Unhandled type ${type} in cartReducer`);
//   }
// };

// export const CartProvider = ({ children }) => {
//   const [{ cartCount, cartItems }, dispatch] = useReducer(
//     CartReducer,
//     INITIAL_STATE
//   );
//   const value = {
//     cartCount,
//     cartItems,
//     addCartItems,
//   };
// };
