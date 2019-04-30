
var itemsDb = JSON.parse(localStorage.getItem('cart'));
if (itemsDb == null) {
    itemsDb = [];
}

// "sckey" er det samme index som anvendes i den anden del af koden (gør ikke noget her bare et navn) 
// Denne function er lavet for at kunne fjerne i local storage (i carten), og derefter displaye de resterende 
/*function removeFromCart(scKey) {
    if(scKey) {
        localStorage.removeItem(scKey);
        document.getElementById("cartContainer").innerHTML = ""
        createCartItems()
    }
}*/

function removeFromCart(itemKey){
    for ( let i = 0; i<itemsDb.length; i++){
        if (itemsDb[i][2] == itemKey) {
            itemsDb.splice(i, 1);
        }
    }
    localStorage.setItem('cart', JSON.stringify(itemsDb));
    var container = document.getElementById("cartContainer");
    container.innerHTML = '';  
    createCartItems();
}
var priceTotal = 0;

function createCartItems() {

    
    var itemsInCart = [];
    var cartHtml = ''
    var cartItemsHtml = '' 


    if(itemsDb.length === 0) {
        console.log("Shopping cart empty")
    } else {
        for (let index = 0; index < itemsDb.length; index++) {
            if (itemsDb[index][0] == loggedUser.userName){
                var currentItem = itemsDb[index][1];
                var dbKey = itemsDb[index][2];
                priceTotal += currentItem.productPrice*1;
                cartItemsHtml += `<table id="myTable">
            <tr>
                <td><img src="${currentItem.productimage}" style="width:75px" /></td>
                <td><strong>${currentItem.productBrand}</strong><td>
                <td>${currentItem.productName}<td>
                <td>${currentItem.productPrice}<td>
                <td><button onClick="removeFromCart('${dbKey}')">Remove from cart</button><td>
            </tr>
            </table>`
            }

            else {
                console.log('User not matched');
            }
        }

        document.getElementById("priceTotal").innerHTML = priceTotal; 
    
    }
    
    cartHtml = `<table>${cartItemsHtml}</table>`
    // Creating a container and appending the html var. above into the products.html after beginning.
    var container = document.getElementById("cartContainer");
    container.insertAdjacentHTML('beforeend', cartHtml);  

};



// https://stackoverflow.com/questions/19902670/append-objects-in-local-storage/19902764
// Load itemsInCart
window.addEventListener('DOMContentLoaded', function() {         
    createCartItems()
});
