// creating product class:
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

var products = [
    new Product("Gazelle", "Classic runners", ["white", "blue"], 200 + " DKK", 1, "Male", "Adidas", "./pics/herre2.png", ["41", "42", "43", "44"], 1), 
    new Product("UltraBoost", "GoT special editions", ["white", "black"], 230 + " DKK", 1, "Male", "Adidas", "./pics/herre0.png", ["41", "42", "43"], 2),
    new Product("Daytona DMX", "Sporty fashion sneaks", ["white", "blue", "black"], 139.95 + " DKK", 1, "Female", "Reebok", "./pics/dame0.png", ["37", "38"], 3),
    new Product("Daytona DMX", "Special Edition", ["white", "black"], 730 + " DKK", 1, "Female", "Reebok", "./pics/dame1.png", ["36", "37", "39"], 4),
    new Product("UltraBoost", "Black 'n' White Edition", ["white", "black"], 645 + " DKK", 1, "Male", "Adidas", "./pics/herre1.png", ["37"], 5),
    new Product("Stan Smith", "A classic!", ["white", "blue"], 430 + " DKK", 1, "Male", "Adidas", "./pics/herre3.png", ["41", "42", "43"], 6),
    new Product("NMD R1", "Limited supply", ["white", "blue", "black"], 399 + " DKK", 1, "Male", "Adidas", "./pics/herre4.png", ["44", "45", "47"], 7),
    new Product("A.R. Trainer", "Newly released runners", ["blue", "black"], 499 + " DKK", 1, "Female", "Adidas", "./pics/dame2.png", ["35", "37", "39"], 8)
];

// --------- 2 ---------
// Creating html sections for each product:
// We loop through each product (in the array) and append the correct product attributions to the html-snippet - to be pushed to the html site.
for (var i = 0; i<products.length; i++) {
    
    // looping through sizes
    var sizeHtml = "";
    for (var j = 0; j<products[i].productSize.length; j++) {
    sizeHtml +=` 
    <option value="size${j+1}"> "${products[i].productSize[j]}" </option>`;
}
    
    // looping through the color-array within the array. Inception! <3
    var colorHtml = "";
    for (var u = 0; u<products[i].productColor.length; u++) {
    colorHtml += ` <div>
    <input data-image="${products[i].productColor[u]}" class="${products[i].productColor[u]}" type="radio" id="${products[i].productColor[u]}-${i}" name="color-${i}" value="${products[i].productColor[u]}">
    <label for="${products[i].productColor[u]}-${i}"> <span> </span> </label>
  </div>`;


    }
    var html = ` <div class="card">
    
    <img src=${products[i].productPicture} alt="Adidas UltraBoost" style="width:100%">
    <h1>${products[i].productName}</h1>
    <h2>${products[i].productBrand}</h2>
    <p class="price">${products[i].productPrice}</p>
    <p>${products[i].productDescription}</p>
    <p>${products[i].productGender}</p>

    <div class="color-choose">
                ${colorHtml}
              </div>
              <div>

    <select name="Size">
    ${sizeHtml}
    </select>
  </div>
              <button class="add-cart-btn" data-id="${this.id}">Add to Cart</button>
              </p>
            </div>
                
`;
// Creating a container and appending the html var. above into the products.html after beginning.
var container = document.getElementById("productsContainer");
container.insertAdjacentHTML('beforeend', html);
}

// ------- 3 -------
// Create functionalities for our product class

// Create a function to get the most recent list of products - enables us to load them by using "getProducts".
function getProducts(){
  return products
;}

// Load the products - hvorfor skal vi have denne? **!!**
//loadProducts();


// Create a function to find a product/item based on it's ID
// The function should take both the array and ID as inputs
const findProductsById = (productId) => {
  // find method - callback method that 
  const product = products.find((product)=> {
          return product.id === productId
  })
  return product
};





/* ----------------Comments -----------------------
//  <input data-image="${products[i].productColor[u]}" class="${products[i].productColor[u]}" type="radio" id="${products[i].productColor[u]}-${i}" 
name="color-${i}" value="${products[i].productColor[u]}">
//<label for="${products[i].productColor[u]}-${i}"> <span class="shoeColor"> </span> </label>
//</div>`;

// 1. we set image to the specic point in our product (will be the color in the object, and loop through all 3 colors in the array (see inception)).
// 2. we define class in the same way.
// 3. we define the type as "radio" enabling radio-buttons to be checked.
// 4. id: we again identify the specific point in our products and loop. But we ALSO add a unique identifier within the input. This means that the radio buttons for each product becomes unique.
//     We need the unique id to use in the label's for function.
// 5. name: creates a a name called "color"+ a unique number. 
// 6. Value: setting value to be the same as 1..

// the labels "for" loop triggers the radio-buttons unique ID number to be checked. 

------------------------------------*/ 

