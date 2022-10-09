import { getStoredCart } from "./Fakedb";


export const ProductAndCardLoader = async () => {
    const productData = await fetch('products.json');
    const products = await productData.json();

    //from local storage
    const savedCart = getStoredCart();
    const previousCart = [];
    // console.log(previousCart)
    // console.log(savedCart);
    for (const id in savedCart) {
        const addedProduct = products.find(product => product.id === id);
        if (addedProduct) {
            const quantity = savedCart[id]
            // console.log('quantity', id, quantity);
            addedProduct.quantity = quantity;
            previousCart.push(addedProduct);

        }
    }


    return { products, previousCart };
}