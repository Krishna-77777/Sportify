import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (productToAdd) => {
    setCart(prevCart => {
      // Check if the product is already in the cart
      const existingItem = prevCart.find(item => item.id === productToAdd.id);

      if (existingItem) {
        // If it exists, map over the cart and update the quantity
        return prevCart.map(item =>
          item.id === productToAdd.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        // If it's a new item, add it to the cart with a quantity of 1
        return [...prevCart, { ...productToAdd, qty: 1 }];
      }
    });
    console.log('Added to cart:', productToAdd.name);
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};