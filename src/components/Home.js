import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';
import Items from './Items';



const Home = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState([]);



    const handleAddItem = product => {
        console.log(product)
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