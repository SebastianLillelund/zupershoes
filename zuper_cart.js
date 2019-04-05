let cart = [];
let quantity = 
/**
 * SHOPPING CART /// (...rest method creates a line-item/copy)
 */

// Create a function that adds a product by it's ID and its quantity to the shopping cart

const addToCart = (productId, quant) => {
    console.log(`${productId} has been added ${quant} times`)
    if (!findProductsById(cart, productId)) {
            cart.push(...findProductsById(products, productId), quantity= quant)
    } else {
            findProductsById((cart, productId),quantity += quant)
            
    }
    saveCart()

};


// Create a function that loads the cart from localStorage
const loadCart = () => {
    if (localStorage.getItem('cart') === null) {
            cart = []
    } else {
            cart = JSON.parse(localStorage.getItem('cart'))
    }
};

// Create a function that saves your cart to localStorage
const saveCart = () => {
    localStorage.setItem('cart'), JSON.stringify(cart)
};

// Create a function that returns the current shopping cart
const getCart = () => {
    return cart
}


// Create a function that calcualtes the total price of the cart



// Make sure to load the cart array



/*------ Index -----*/

// Add an EventListener to every add-to-cart button in the shop and link it
// to the addToCart(itemID, quantity) // cannot use getdocumentID, as we need to load all buttons to this functionality.
const buttons = document.getElementsByClassName('add-cart-btn')

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (event) => {
        let quantity = buttons[i].previousElementSibling.value
        addToCart(event.target.dataset.productId, quantity)
    })
}
