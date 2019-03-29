class ProductID {
    constructor(productName, productDescription, productColor, productPrice, productQuantity, productGender, productBrand, productPicture) {
        this.productName = productName;
        this.productDescription = productDescription;
        this.productColor = productColor;
        this.productPrice = productPrice;
        this.productQuantity = productQuantity;
        this.productGender = productGender;
        this.productBrand = productBrand;
        this.productPicture = productPicture;
    }
}

var products = [
    new ProductID("Adida", "description", ["red", "blue", "black"], 22, 1, "gender", "brand", "pictureURL"), 
    new ProductID("Name2", "description2", ["red", "blue", "black"], 22, 1, "gender2", "brand2", "pictureURL2"),
    new ProductID("Name2", "description2", ["red", "blue", "black"], 22, 1, "gender2", "brand2", "pictureURL2"),
    new ProductID("Name2", "description2", ["red", "blue", "black"], 22, 1, "gender2", "brand2", "pictureURL2"),
    new ProductID("Name2", "description2", ["red", "blue", "black"], 22, 1, "gender2", "brand2", "pictureURL2"),
    new ProductID("Name2", "description2", ["red", "blue", "black"], 22, 1, "gender2", "brand2", "pictureURL2"),
    new ProductID("Name2", "description2", ["red", "blue", "black"], 22, 1, "gender2", "brand2", "pictureURL2"),
    new ProductID("Name2", "description2", ["red", "blue", "black"], 22, 1, "gender2", "brand2", "pictureURL2")
];
function selectThisColor() {
    
}
// We loop through each product (in the array) and append the correct product attributions to the html-snippet - to be pushed to the html site.
for (var i = 0; i<products.length; i++) {
    // looping through the color-array within the array. Inception! <3
    var colorHtml = "";
    for (var u = 0; u<products[i].productColor.length; u++) {
    colorHtml += ` <div>
    <input data-image="${products[i].productColor[u]}" type="radio" id="${products[i].productColor[u]}" name="color" value="${products[i].productColor[u]}">
    <label class="shoeColor" for="${products[i].productColor[u]}"> <span onclick="selectThisColor();"></span></label>
  </div>`;


    }
    var html = ` <div class="card">
    <img src="./pics/jeans3.jpg" alt="Adidas UltraBoost" style="width:100%">
    <h1>${products[i].productName}</h1>
    <p class="price">${products[i].productPrice}</p>
    <p>ZUPER SHOES!!!!</p>

    Product Color
            <div class="product-color">
              <span>Color</span>
              <div class="color-choose">
                ${colorHtml}
              </div>
<select>
<option value="41">41</option>
<option value="42">42</option>
<option value="43">43</option>
<option value="44">44</option>
<option value="45">45</option>
</select>
              <p><button id="myButton" class="float-left submit-button" >Add to cart</button>
              </p>
            </div>
`;
// Creating a container and appending the html var. above into the products.html after beginning.
var container = document.getElementById("productsContainer");
container.insertAdjacentHTML('beforeend', html);
}



/*
// span-span is the button u can click. the onclick defines what happens when u click the button. in this case, we trigger the function selectThisColor();
<span onclick="selectThisColor();"></span>

*/