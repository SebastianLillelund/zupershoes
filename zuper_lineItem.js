// vi skal lave et lineitem object der henter info fra size, color, pid ind i stedet for i en array.
// Vi skal altså have en object-array med disse line-item arrays i + vores products array fra products.js.
// Den skal så kigge efter ID og kigge efter products classen
// Se Martins eksempel med Gin factory.

// class lineItem {
//     constructor(itemName, itemDescription, itemPicture){
//         for (var j = 0; j<products.length; j++) {
//             this.products[j].productName = itemName;
//             this.products[j].productDescription = itemDescription;
//             this.products[j].productPicture = itemPicture;
//         };
//     };
// }; 

/* 
cartDb = [
    [username, itemToCart],
    [username2, itemToCart2],
] 
*/
var cartDb = JSON.parse(localStorage.getItem('cart'));

if (cartDb == null){
    cartDb = [];
}

// click on button
function updateCart(index) {
    console.log("index: " + index)

   //           for (var j = 0; j<products.length; j++) {
   //             // lineItem.itemName = products[j].productName
   //             // lineItem.itemDescription = products[j].productDescription
   //             // lineItem.itemPicture = products[j].productPicture
   //             };

   var size = document.getElementById(`size-selection-${index}`).value;
   //querySelector is a method to get an html element. Since we're using query's we're not limited to retrieving ID's.
   // På nedenstående linje får vi en "fejl" da der aktivt skal vælges en farve, der er altså ikke valgt en by default, hvilket ikke kan ses på de hvide :)
   var color = document.querySelector(`input[name='color-${index}']:checked`).value;
   var pId = document.getElementById(`submit-${index}`).value;
   var productName = document.getElementById(`product-name-${index}`).innerHTML;
   var productDescription = document.getElementById(`product-description-${index}`).innerHTML;
   var productGender = document.getElementById(`product-gender-${index}`).innerHTML;
   var productPrice = document.getElementById(`product-price-${index}`).innerHTML;
   var productBrand = document.getElementById(`product-brand-${index}`).innerHTML;
   var productimage = document.getElementById(`product-image-${index}`).src;
   console.log(productimage)

   var itemToCart = {
       size: size,
       color: color,
       pId: pId,
       productimage: productimage,
       productName: productName,
       productDescription: productDescription,
       productGender: productGender,
       productPrice: productPrice,
       productBrand: productBrand,
   }
   // date.now giver et unikt tidsstempel "id."" denne bruger vi her som løsning for at kunne tilføje flere ens produkter til carten  
   var shoppincartId = 'sc-' + Date.now()
   console.log(shoppincartId)

   localStorage.setItem(shoppincartId, JSON.stringify(itemToCart));

   cartDb.push([loggedUser.userName, itemToCart, 'item-'+ Date.now()]);

   localStorage.setItem('cart', JSON.stringify(cartDb));
};
// Load products based on stored pId.
