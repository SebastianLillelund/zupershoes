// we create a cartDatabase variable and loads in items stored in 'cart'.
// we parse to turn the localstorage string into a javascript object.
var cartDb = JSON.parse(localStorage.getItem('cart'));

// cartDb will either hold items as an array, or be empty in which case it is = null --> null = nothing / empty.
// We can only use push to store something in an array, therefore we set cartDb to be an empty ARRAY if null.
if (cartDb == null) {
    cartDb = [];
}

// click on button
function updateCart(index) {
    // We now assign the element-values to varibales 
    var size = document.getElementById(`size-selection-${index}`).value;
    var color = document.querySelector(`input[name='color-${index}']:checked`).value;
    var productName = document.getElementById(`product-name-${index}`).innerHTML;
    var productDescription = document.getElementById(`product-description-${index}`).innerHTML;
    var productGender = document.getElementById(`product-gender-${index}`).innerHTML;
    var productPrice = document.getElementById(`product-price-${index}`).innerHTML;
    var productBrand = document.getElementById(`product-brand-${index}`).innerHTML;
    var productimage = document.getElementById(`product-image-${index}`).src;
    // we save in an array 
    var itemToCart = {
        size: size,
        color: color,
        productimage: productimage,
        productName: productName,
        productDescription: productDescription,
        productGender: productGender,
        productPrice: productPrice,
        productBrand: productBrand,
    }

    // pushing the users information and item selected (itemToCart). - we create a user and product relation.
    cartDb.push([loggedUser.userName, itemToCart]);
    // We transfer the array to localstorage as with the key 'cart'
    localStorage.setItem('cart', JSON.stringify(cartDb));

    // we alert an 'Item added' message to the user, to make it known that the item was succesfully stored.
    alert('Item added to shoppingcart');
};
