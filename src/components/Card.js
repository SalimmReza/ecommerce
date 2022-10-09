import React from 'react';

const Card = ({ cart }) => {
    console.log(cart)
    return (
        <div>
            <h4>Total: {cart.length}</h4>
        </div>
    );
};

export default Card;