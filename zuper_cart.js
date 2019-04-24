// Load user info
var loggedUser;
document.addEventListener('DOMContentLoaded', function(){ 
    loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    document.getElementById("firstname-label").innerHTML = loggedUser.firstName;
    document.getElementById("user-lastName-label").innerHTML = loggedUser.lastName;
    document.getElementById("user-address-label").innerHTML = loggedUser.address;
    document.getElementById("user-userName-label").innerHTML = loggedUser.userName;
});

// "sckey" er det samme index som anvendes i den anden del af koden (gør ikke noget her bare et navn) 
// Denne function er lavet for at kunne fjerne i local storage (i carten), og derefter displaye de resterende 
function removeFromCart(scKey) {
    if(scKey) {
        localStorage.removeItem(scKey)
        document.getElementById("cartContainer").innerHTML = ""
        createCartItems()
    }
}

function createCartItems() {
    var itemsInCart = [];
    var cartHtml = ''
    var cartItemsHtml = '' 
    if(localStorage.length === 0) {
        console.log("Shopping cart empty")
    } else {
        for (let index = 0; index < localStorage.length; index++) {
            itemsInCart.push(JSON.parse(localStorage.getItem(localStorage.key(index))))
        }
        for (let index = 0; index < itemsInCart.length; index++) {
            cartItemsHtml += `<tr>
                <td><img src="${itemsInCart[index].productimage}" style="width:75px" /></td>
                <td><strong>${itemsInCart[index].productBrand}</strong><td>
                <td>${itemsInCart[index].productName}<td>
                <td><button onClick="removeFromCart(localStorage.key(${index}))">Remove from cart</button><td>
            </tr>`
            
        }
    }
    cartHtml = `<table>${cartItemsHtml}</table>`
    // Creating a container and appending the html var. above into the products.html after beginning.
    var container = document.getElementById("cartContainer");
    container.insertAdjacentHTML('beforeend', cartHtml);  
}

// https://stackoverflow.com/questions/19902670/append-objects-in-local-storage/19902764
// Load itemsInCart
window.addEventListener('DOMContentLoaded', function() {         
    createCartItems()
});