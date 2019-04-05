class lineItem {
    constructor(itemName, itemDescription){
        for (var j = 0; j<products.length; j++) {
            this.products[j].productName = itemName;
            this.products[j].productDescription = itemDescription;
        };
    };
};

// click on button
const updateCart = (index) => {

            for (var j = 0; j<products.length; j++) {
            Item.itemName = products[j].productName
            Item.itemDescription = products[j].productDescription
            };

var size = document.getElementById(`size-selection-${index}`).value;
//querySelector is a method to get an html element. Since we're using query's we're not limited to retrieving ID's.
var color = document.querySelector(`input[name='color-${index}']:checked`).value;


var itemToCart = [linItem.itemName, lineItem.itemDescription, size, color]

console.log(itemToCart);

localStorage.setItem('itemToCart', JSON.stringify(itemToCart));
};



