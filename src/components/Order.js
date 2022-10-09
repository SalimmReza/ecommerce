import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';
import { removeFromDb } from './Fakedb';
import ReviewItems from './ReviewItems';

const Order = () => {

    const { products, previousCart } = useLoaderData();
    console.log(products);
    const [cart, setCart] = useState(previousCart)
    console.log(cart);
    // console.log(previousCart);

    const handleRemoveCart = (id) => {
        const remaining = cart.filter(order => order.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    return (
        <div>
            <h1>Selected Products {cart.length}</h1>

            <div className='flex'>
                <div className="">
                    {
                        cart.map(order => <ReviewItems
                            key={order.id}
                            order={order}
                            handleRemoveCart={handleRemoveCart}
                        ></ReviewItems>)
                    }

                </div>
                <div className="cart-container">
                    <h1>kfbvfhb</h1>
                    <Card cart={cart}></Card>
                </div>
            </div>
        </div>
    );
};

export default Order;