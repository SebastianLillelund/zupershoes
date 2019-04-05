class Item {
    constructor(itemName, itemDescription){
        for (var j = 0; j<products.length; j++) {
            this.products[j].productName = itemName;
            this.products[j].productDescription = itemDescription;
        };
    };
};

// click on button
const updateCart = (index) => {
    
    
    /*
    const itemSelected = [
        new Item(itemName, itemDescription)
    ]; */
            for (var j = 0; j<products.length; j++) {
            Item.itemName = products[j].productName
            Item.itemDescription = products[j].productDescription
            };


   // console.log(Item.itemName + Item.itemDescription);

var size = document.getElementById(`size-selection-${index}`).value;
//querySelector is a method to get an html element. Since we're using query's we're not limited to retrieving ID's.
var color = document.querySelector(`input[name='color-${index}']:checked`).value;


var itemToCart = [Item.itemName, Item.itemDescription, size, color]

console.log(itemToCart);

        };







/* working stuff //
var itemSelected = []

// click on button
const updateCart = (index) => {
   
    
    for (var j = 0; j<products.length; j++) {
    itemSelected = products[j].productName 
    + products[j].productBrand
    + products[j].productDescription
    + products[j].productGender
    + products[j].productPrice
    + products[j].productPicture


    };
    console.log(itemSelected);

console.log(document.getElementById(`size-selection-${index}`).value);
//querySelector is a method to get an html element. Since we're using query's we're not limited to retrieving ID's.
console.log(document.querySelector(`input[name='color-${index}']:checked`).value);
}

*/