œ/**
 * SHOPPING CART
 */

// Create a function that adds a product by it's ID and its quantity to the shopping cart
const addToCart = (id, quant) => {
    console.log(`${id} has ben added ${quant} times`);
    if (!findProductById(cart, id)) {
            cart.push({...findProductById(products, id), quantity: quant})
    } else {
            findProductById(cart, id).quantity += quant
    }
    saveCart()
}


