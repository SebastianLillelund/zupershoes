// Load user info
var loggedUser;
document.addEventListener('DOMContentLoaded', function(){ 
// your code goes here
loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
document.getElementById("firstname-label").innerHTML = loggedUser.firstName;
document.getElementById("user-lastName-label").innerHTML = loggedUser.lastName;
document.getElementById("user-address-label").innerHTML = loggedUser.address;
document.getElementById("user-userName-label").innerHTML = loggedUser.userName;

});

var itemsInCart = [];

// Load itemsInCart
window.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('itemToCart') === null) {
        itemsInCart = [];
        console.log("Your shoppingcart is empty");
  } 
  else {
    itemsInCart = JSON.parse(localStorage.getItem('itemToCart'));
    console.log(itemsInCart);
    };

// creating cartItem class:
class CartItem {
    constructor(cartItemName, cartItemDescription, cartSize, cartColor, cartPicture) {
        this.itemsInCart[0] = cartItemName;
        this.itemsInCart[1] = cartItemDescription;
        this.itemsInCart[2] = cartSize;
        this.itemsInCart[3] = cartColor;
        this.itemsInCart[4] = cartPicture;
    }
};


// Creating html sections for each product:
// We loop through each product (in the array) and append the correct product attributions to the html-snippet - to be pushed to the html site.
var cartHtml;
for (var i = 0; i<CartItem.length; i++) {
    
    cartHtml = ` <div class="card">
        
        <img src=${CartItem.cartPicture} alt="Adidas UltraBoost" style="width:100%">
        <h1> ${CartItem.cartItemName}</h1>
        <h2>${itemsInCart[i].productBrand}</h2>
        <p class="price">${itemsInCart[i].productPrice}</p>
        <p>${itemsInCart[i].productDescription}</p>
        <p>${itemsInCart[i].productGender}</p>
        <p>${itemsInCart[i].productSize}</p>
        <p>${itemsInCart[i].productColor}</p>

            <div> <button class="purchase-btn" onclick="console.log("hi");" id="">Purchase</button>
            </div>
    </div>
    
`;
// Creating a container and appending the html var. above into the products.html after beginning.
var container = document.getElementById("cartContainer");
container.insertAdjacentHTML('beforeend', cartHtml);

};                  

});