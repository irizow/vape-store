import React from 'react';
import { Outlet } from 'react-router-dom';
import { CartProvider } from './utils/shoppingCart';
import Header from './components/Header/Header';


export default function App() {
    return (
        <CartProvider>
            <Header />
            <Outlet />
        </CartProvider>
    )

}