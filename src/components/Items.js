import React from 'react';

const Items = ({ product, handleAddItem }) => {

    // console.log(product)
    const { name, img, price, shipping, catagoty } = product;

    return (
        <div className="card w-96 glass">
            <figure><img src={img} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{price}</p>
                <p>{shipping}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddItem(product)} className="btn btn-primary">Add</button>
                </div>
            </div>
        </div>
    );
};

export default Items;