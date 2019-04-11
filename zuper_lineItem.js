/*class lineItem {
    constructor(itemName, itemDescription, itemPicture){
        for (var j = 0; j<products.length; j++) {
            this.products[j].productName = itemName;
            this.products[j].productDescription = itemDescription;
            this.products[j].productPicture = itemPicture;
        };
    };
}; */

// click on button
 const updateCart = (index) => {

//           for (var j = 0; j<products.length; j++) {
//             // lineItem.itemName = products[j].productName
//             // lineItem.itemDescription = products[j].productDescription
//             // lineItem.itemPicture = products[j].productPicture
//             };

var size = document.getElementById(`size-selection-${index}`).value;
//querySelector is a method to get an html element. Since we're using query's we're not limited to retrieving ID's.
var color = document.querySelector(`input[name='color-${index}']:checked`).value;
var pId = document.getElementById(`submit-${index}`).value;

var itemToCart = [size, color, pId]

console.log(itemToCart);

localStorage.setItem('itemToCart', JSON.stringify(itemToCart));

};
// Load products based on stored pId.
