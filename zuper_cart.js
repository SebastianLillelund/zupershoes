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




//




    // Creating a container and appending the html var. above into the products.html after beginning.
var container = document.getElementById("cartContainer");
container.insertAdjacentHTML('beforeend', cartHtml);                


});