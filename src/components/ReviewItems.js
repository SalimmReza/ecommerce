import React from 'react';

const ReviewItems = ({ order, handleRemoveCart }) => {
    const { id, name, img, price, shipping, ratings, quantity } = order
    return (
        <div className="card card-side bg-base-100 shadow-xl w-[50%] my-3 ml-3 ">
            <figure><img className='h-[210px]' src={img} alt="Movie" /></figure>
            <div className="w-[100%] flex py-2 px-2  ">
                <div className='w-[100%]'>
                    <h2 className="card-title">{name}</h2>
                    <p>Price: {price}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Shipping Charge: {shipping}</p>
                    <p>Ratting: {ratings}</p>
                </div>
                <div className="card-actions justify-end flex items-center">
                    <button className="btn btn-primary" onClick={() => handleRemoveCart(id)}>Remove</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItems;