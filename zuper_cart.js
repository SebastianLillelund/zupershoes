// when the site loads, we first check for login status. 
window.addEventListener('DOMContentLoaded', function () {
    if (loggedUser === null) {
        alert("Please login to access your shoppingcart");
        window.location.assign('./zuper_login.html')
        // if login is registered --> we load cart items through our function.
    } else {
        createCartItems();
    };
});

// when access to cart-site is granted, we setup the priceTotal variable and the itemDatabase.
var priceTotal = 0;
var itemsDb = JSON.parse(localStorage.getItem('cart'));
if (itemsDb == null) {
    itemsDb = [];
};

/* --- Declaring functions --- */

// function that can remove a specific item from the cart.
function removeFromCart(itemKey) {
    for (let i = 0; i < itemsDb.length; i++) {
        // we need to remove items from itemsDb based on the unique time-id we created. 
        // This value is stored as the third index = [2]. Example: ["username", {all item properties}, "item-1557239902725"] 
        if (itemsDb[i][2] == itemKey) {
            // We remove the item from our Db array.
            itemsDb.splice(i, 1);
        }
    }
    // We load in the items that are now left in itemsDb.
    localStorage.setItem('cart', JSON.stringify(itemsDb));
    var container = document.getElementById("cartContainer");
    container.innerHTML = '';
    createCartItems();
    window.location.reload();
}

function createCartItems() {
    var cartHtml = ''
    var cartItemsHtml = ''

    // we check for empty carts
    if (itemsDb.length === 0) {
        alert("Shoppingcart is empty")
    } else {
        // we loop through items that have been stored by user in itemsDb
        for (let index = 0; index < itemsDb.length; index++) {
            // linking itemsDb to the users unique array of items + display array of items
            if (itemsDb[index][0] == loggedUser.userName) {
                var currentItem = itemsDb[index][1];
                var dbKey = itemsDb[index][2];
                // adds each currentItem to the priceTotal variable.
                priceTotal += currentItem.productPrice * 1;
                cartItemsHtml += `<table id="myTable">
            <tr>
                <td><img src="${currentItem.productimage}" style="width:75px" /></td>
                <td><strong>${currentItem.productBrand}</strong><td>
                <td>${currentItem.productName}<td>
                <td>DKK: ${currentItem.productPrice}<td>
                <td>Size: ${currentItem.size}<td>
                <td><button onClick="removeFromCart('${dbKey}')">Remove from cart</button><td>
            </tr>
            </table>`
            }
        }
        // displays the total price
        document.getElementById("priceTotal").innerHTML = priceTotal;
    }

    cartHtml = `<table>${cartItemsHtml}</table>`
    // Creating a container and appending the html var. above into the products.html after beginning.
    var container = document.getElementById("cartContainer");
    container.insertAdjacentHTML('beforeend', cartHtml);

    
};


