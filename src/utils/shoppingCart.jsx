import React, { createContext, useState, useContext } from 'react';

 const CartContext = createContext();

 export const useCart = () => {
    return useContext(CartContext)
 }

 export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (product, quantity) => {
        const prevCart = cart;
        const productquantity = quantity;
        setCart([...prevCart, {product}])
        console.log("cart: " + cart)
    }

    const removeFromCart = (productId) => {
        const prevCart = cart;
        setCart(prevCart.filter((product)=> product.id !== productId))
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
 }
