import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';

import NavBar from './NavBar';



export const CartContext = createContext([])
export const ProductContext = createContext([])
const Main = () => {
    const { products, previousCart } = useLoaderData();


    const [cart, setCart] = useState(previousCart)
    // console.log(cart)



    return (
        <ProductContext.Provider value={products}>
            <CartContext.Provider value={[cart, setCart]}>
                <div>
                    <NavBar></NavBar>
                    <Outlet></Outlet>
                </div>


            </CartContext.Provider>
        </ProductContext.Provider>

    );
};

export default Main;