// Load user info
var loggedUser;
var itemsInCart = [];

// load info on pageLoad
document.addEventListener('DOMContentLoaded', function(){ 
// your code goes here
loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
document.getElementById("firstname-label").innerHTML = loggedUser.firstName;
document.getElementById("user-lastName-label").innerHTML = loggedUser.lastName;
document.getElementById("user-address-label").innerHTML = loggedUser.address;
document.getElementById("user-userName-label").innerHTML = loggedUser.userName;




// Load itemsInCart

    if (localStorage.getItem('itemToCart') === null) {
        itemsInCart = [];
        console.log("Your shoppingcart is empty");
  } 
  else {
    itemsInCart = JSON.parse(localStorage.getItem('itemToCart'));
    console.log(itemsInCart);
    };

// for (var i = 0; i<products.length; i++) {
//     if (itemsInCart.pId === products[i].productId) {
//         alert("We found a match!")   
//     } else {
//         alert("something went wrong")
//     }
// };

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

var itemsToFind = [
{color:"sort", size: 41, id:100882364262376234},
{color:"sort", size: 41, id:212331272354252}
];

itemSearch = [];

for (i = 0; i<products.length; i++) {
    var itemSearch = [
        {productName: products[i].productName, id: products[i].productId}
    ];

const result = itemSearch.find( cartItem => cartItem.id === itemsToFind.id );

console.log(result) // { name: 'cherries', quantity: 5 }

};


    // Creating a container and appending the html var. above into the products.html after beginning.
var container = document.getElementById("cartContainer");
container.insertAdjacentHTML('beforeend', cartHtml);                


});