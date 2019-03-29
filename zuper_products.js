class ProductID {
    constructor(productName, productDescription, productColor, productPrice, productQuantity, productGender, productBrand, productPicture, productSize) {
        this.productName = productName;
        this.productDescription = productDescription;
        this.productColor = productColor;
        this.productPrice = productPrice;
        this.productQuantity = productQuantity;
        this.productGender = productGender;
        this.productBrand = productBrand;
        this.productPicture = productPicture;
        this.productSize = productSize;
    }
};

var products = [
    new ProductID("Adida", "description", ["red", "blue", "black"], 200 + " DKK", 1, "gender", "brand", "./pics/jeans3.jpg", ["41", "42", "43"]), 
    new ProductID("Name2", "description2", ["red", "blue", "black"], 230 + " DKK", 1, "gender2", "brand2", "./pics/jeans3.jpg", ["41", "42", "43"]),
    new ProductID("Name2", "description2", ["red", "blue", "black"], 139.95 + " DKK", 1, "gender2", "brand2", "./pics/jeans3.jpg", ["41", "42", "43"]),
    new ProductID("Name2", "description2", ["red", "blue", "black"], 730 + " DKK", 1, "gender2", "brand2", "./pics/jeans3.jpg", ["41", "42", "43"]),
    new ProductID("Name2", "description2", ["red", "blue", "black"], 645 + " DKK", 1, "gender2", "brand2", "./pics/jeans3.jpg", ["41", "42", "43"]),
    new ProductID("Name2", "description2", ["red", "blue", "black"], 430 + " DKK", 1, "gender2", "brand2", "./pics/jeans3.jpg", ["41", "42", "43"]),
    new ProductID("Name2", "description2", ["red", "blue", "black"], 399 + " DKK", 1, "gender2", "brand2", "./pics/jeans3.jpg", ["41", "42", "43"]),
    new ProductID("Name2", "description2", ["red", "blue", "black"], 499 + " DKK", 1, "gender2", "brand2", "./pics/jeans3.jpg", ["41", "42", "43"])
];

// We loop through each product (in the array) and append the correct product attributions to the html-snippet - to be pushed to the html site.
for (var i = 0; i<products.length; i++) {
    
    // looping through sizes
    var sizeHtml = "";
    for (var j = 0; j<products[i].productSize.length; j++) {
    sizeHtml +=` 
    <option value="size${j+1}"> "${products[i].productSize[j]}" </option>`;
 
};
    
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

    <div class="color-choose">
                ${colorHtml}
              </div>
              <div>

    <select name="Size">
    ${sizeHtml}
    </select>
  </div>

              <p><button id="myButton" class="float-left submit-button" >Add to cart</button>
              </p>
            </div>
`;
// Creating a container and appending the html var. above into the products.html after beginning.
var container = document.getElementById("productsContainer");
container.insertAdjacentHTML('beforeend', html);
}



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