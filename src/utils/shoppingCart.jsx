import React, { createContext, useState, useContext } from 'react';

 const CartContext = createContext();

 export const useCart = () => {
    return useContext(CartContext)
 }

 export const CartProvider = ({children}) => {
    const [isCart, setIsCart] = useState(false);
    const [total, setTotal] = useState(0)
    const [cart, setCart] = useState([])

    const addToCart = (product, quantity) => {
        const existingProduct = cart.find(prevProduct => prevProduct.product.id === product.id)

        if (existingProduct) {
            return setCart(cart.map(item => 
                item.product.id === product.id ? {...item, quantity: item.quantity + quantity} 
                : item
            ))
        }
        
        else {
        const newProduct = { product, quantity }
        setCart([...cart, newProduct])
        console.log("cart: " + cart[0])}
    }

    const updateQuantity = (product, qty) => {
        const newCart = cart.map(item => item.product.id === product.product.id ? {...item, quantity: item.quantity + qty} : item)
        console.log( " and " + product.product.id)
        setCart(newCart)
    }

    const updateTotal = () => {
        const newTotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
        console.log("New total" + newTotal)
        setTotal(newTotal);
    }

    const removeFromCart = (productId) => {
        const prevCart = cart;
        setCart(prevCart.filter((product)=> product.product.id !== productId))
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, setIsCart, isCart, total, setTotal, updateQuantity, updateTotal }}>
            {children}
        </CartContext.Provider>
    )
 }
