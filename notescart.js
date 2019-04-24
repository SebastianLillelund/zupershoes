
class Product {
    constructor(productName, productDescription, productColor, productPrice, productQuantity, productGender, productBrand, productPicture, productSize, productId) {
        this.productName = productName;
        this.productDescription = productDescription;
        this.productColor = productColor;
        this.productPrice = productPrice;
        this.productQuantity = productQuantity;
        this.productGender = productGender;
        this.productBrand = productBrand;
        this.productPicture = productPicture;
        this.productSize = productSize;
        this.productId = productId;
    }
  };

  products = [
    new Product("Gazelle", "Classic runners", ["white", "blue"], 200, 1, "Male", "Adidas", "./pics/herre2.png", [41, 42, 43, 44], 100882364262376234), 
    new Product("UltraBoost", "GoT special editions", ["white", "black"], 230, 1, "Male", "Adidas", "./pics/herre0.png", [41, 42, 43], 212331272354252),
    new Product("Daytona DMX", "Sporty fashion sneaks", ["white", "blue", "black"], 139.95, 1, "Female", "Reebok", "./pics/dame0.png", [37, 38], 3792349784978),
    new Product("Daytona DMX", "Special Edition", ["white", "black"], 730, 1, "Female", "Reebok", "./pics/dame1.png", [36, 37, 39], 48972384),
    new Product("UltraBoost", "Black 'n' White Edition", ["white", "black"], 645, 1, "Male", "Adidas", "./pics/herre1.png", [37], 127389874325),
    new Product("Stan Smith", "A classic!", ["white", "blue"], 430, 1, "Male", "Adidas", "./pics/herre3.png", [41, 42, 43], 609642345678967787),
    new Product("NMD R1", "Limited supply", ["white", "blue", "black"], 399, 1, "Male", "Adidas", "./pics/herre4.png", [44, 45, 47], 7823443278993456789),
    new Product("A.R. Trainer", "Newly released runners", ["blue", "black"], 499, 1, "Female", "Adidas", "./pics/dame2.png", [35, 37, 39], 89876457890987655)
];



// --------

var itemsToFind = {color:"sort", size: 41, id:100882364262376234};

const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5},
    {productName: products[0].productName, id: products[0].productId}
];

const result = inventory.find( cartItem => cartItem.id === itemsToFind.id );

console.log(result) // { name: 'cherries', quantity: 5 }




// Create a function to find a product/item based on it's ID
// The function should take both the array and ID as inputs

// for (var i = 0; i<products.length; i++) {
//     if (itemsToFind.id === products[i].productId) {
//         alert("We found a match!")   
//     }
// };
