import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';
import Items from './Items';
import { addToDb, getStoredCart } from './Fakedb'



const Home = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState([]);

    useEffect(() => {

        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])



    const handleAddItem = product => {
        let newCart = [];
        const exists = cart.find(item => item.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else {
            const rest = cart.filter(item => item.id !== product.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(product.id);
    }



    return (
        <div>
            <div className='grid  grid-cols-4 gap-10 container '>
                <div className=' col-span-3  gap-10 grid  grid-cols-3'>
                    <div className='col-span-3 mt-[10px] '>
                        <div className='flex mt-20 italic items-center font-bold  text-3xl'>


                        </div>
                    </div>
                    {
                        products.map(product => <Items
                            key={product.id}
                            product={product}
                            handleAddItem={handleAddItem}
                        >
                        </Items>)
                    }
                </div>
                <div className='px-6 mb-10 lg:mb-0 bg-white-100 shadow-lg shadow-indigo-500/50 '>

                    <Card cart={cart}></Card>

                </div>
            </div>
        </div>
    );
};

export default Home;