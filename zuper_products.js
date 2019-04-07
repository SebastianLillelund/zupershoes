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
var products = []
var productsFiltered = []
function generateProducts() {
  products = [
    new ProductID("Gazelle", "Classic runners", ["white", "blue"], 200, 1, "Male", "Adidas", "./pics/herre2.png", [41, 42, 43, 44]), 
    new ProductID("UltraBoost", "GoT special editions", ["white", "black"], 230, 1, "Male", "Adidas", "./pics/herre0.png", [41, 42, 43]),
    new ProductID("Daytona DMX", "Sporty fashion sneaks", ["white", "blue", "black"], 139.95, 1, "Female", "Reebok", "./pics/dame0.png", [37, 38]),
    new ProductID("Daytona DMX", "Special Edition", ["white", "black"], 730, 1, "Female", "Reebok", "./pics/dame1.png", [36, 37, 39]),
    new ProductID("UltraBoost", "Black 'n' White Edition", ["white", "black"], 645, 1, "Male", "Adidas", "./pics/herre1.png", [37]),
    new ProductID("Stan Smith", "A classic!", ["white", "blue"], 430, 1, "Male", "Adidas", "./pics/herre3.png", [41, 42, 43]),
    new ProductID("NMD R1", "Limited supply", ["white", "blue", "black"], 399, 1, "Male", "Adidas", "./pics/herre4.png", [44, 45, 47]),
    new ProductID("A.R. Trainer", "Newly released runners", ["blue", "black"], 499, 1, "Female", "Adidas", "./pics/dame2.png", [35, 37, 39])
];
  productsFiltered = products
}
//Size
function getAllSizes() {
  generateProducts()
  var allSizes = []
  for (var i = 0; i<products.length; i++) {
    for (var j = 0; j<products[i].productSize.length; j++) {
      allSizes.push(products[i].productSize[j])
    };
  }
  var uniqueSizes = allSizes.filter((v, i , a) => a.indexOf(v) === i)
  var sortedUniqueSizes = uniqueSizes.sort()
  var options = ""
  var sizeSelectElement = document.getElementById("sizeFilterSelect");
  for (var i = 0; i<sortedUniqueSizes.length; i++) {
    // options += `<option value="${sortedUniqueSizes[i]}">${sortedUniqueSizes[i]}</option>`
    var option = document.createElement("option")
    option.text = sortedUniqueSizes[i]
    option.value = sortedUniqueSizes[i]
    sizeSelectElement.add(option)
  }
  return options
}

getAllSizes()
function clearFilters() {
  generateProducts()
  document.getElementById("productsContainer").innerHTML = ""
  listProducts(products)
}

function filterBySize() {
  // clear existing products from DOM
  document.getElementById("productsContainer").innerHTML = ""
  var sizeValue = document.getElementById("sizeFilterSelect").value
  if(!sizeValue) {
    productsFiltered = products
  } else { 
    productsFiltered = productsFiltered.filter((product) => {
      if(product.productSize.includes(Number(sizeValue))) {
        return product
      }
    })
  }
  listProducts(productsFiltered)
  setMinAndMaxPrice()
}
//Colors
function getAllColors() {
  var allColors = []
  for (var i = 0; i<products.length; i++) {
    for (var j = 0; j<products[i].productColor.length; j++) {
      allColors.push(products[i].productColor[j])
    };
  }
  var uniqueColors = allColors.filter((v, i , a) => a.indexOf(v) === i)
  var sortedUniqueColors = uniqueColors.sort()
  var options = ""
  var colorSelectElement = document.getElementById("colorFilterSelect");
  for (var i = 0; i<sortedUniqueColors.length; i++) {
    // options += `<option value="${sortedUniqueSizes[i]}">${sortedUniqueSizes[i]}</option>`
    var option = document.createElement("option")
    option.text = sortedUniqueColors[i]
    option.value = sortedUniqueColors[i]
    colorSelectElement.add(option)
  }
  return options
}

getAllColors()

function filterByColor() {
  // clear existing products from DOM
  document.getElementById("productsContainer").innerHTML = ""
  var colorValue = document.getElementById("colorFilterSelect").value
  if(!colorValue) {
    productsFiltered = products
  } else {
    productsFiltered = productsFiltered.filter((product) => {
      if(product.productColor.includes(colorValue)) {
        console.log(product)
        return product
      }
    })
  }
  listProducts(productsFiltered)
  setMinAndMaxPrice()
  console.log(selectedFilters)
}

// price
function filterByFromPrice() {
  // clear existing products from DOM
  document.getElementById("productsContainer").innerHTML = ""
  var priceFrom = document.getElementById("priceFrom").value
  console.log(priceFrom)
  if(!priceFrom) {
    productsFiltered = products
  } else {
    productsFiltered = productsFiltered.filter((product) => {
      if(product.productPrice >= Number(priceFrom)) {
        return product
      }
    })
  }
  listProducts(productsFiltered)
}

function setMinAndMaxPrice() {
  var allPrices = []
  for (var i = 0; i<productsFiltered.length; i++) {
    allPrices.push(productsFiltered[i].productPrice)
  }
  var allPricesSorted = allPrices.sort()
  var startPrice = allPricesSorted[0] || 0
  var endPrice = allPricesSorted.reverse()[0] || 1000
  document.getElementById("priceFrom").value = startPrice
  document.getElementById("priceTo").value = endPrice
}

setMinAndMaxPrice()

function listProducts(productsFilter) {
  // We loop through each product (in the array) and append the correct product attributions to the html-snippet - to be pushed to the html site.
for (var i = 0; i<productsFilter.length; i++) {
    
  // looping through sizes
  var sizeHtml = "";
  for (var j = 0; j<productsFilter[i].productSize.length; j++) {
  sizeHtml +=` 
  <option value="${j+1}"> ${productsFilter[i].productSize[j]} </option>`;
}
  
  // looping through the color-array within the array. Inception! <3
  var colorHtml = "";
  for (var u = 0; u<productsFilter[i].productColor.length; u++) {
  colorHtml += ` <div>
  <input data-image="${productsFilter[i].productColor[u]}" class="${productsFilter[i].productColor[u]}" type="radio" id="${productsFilter[i].productColor[u]}-${i}" name="color-${i}" value="${productsFilter[i].productColor[u]}">
  <label for="${productsFilter[i].productColor[u]}-${i}"> <span> </span> </label>
</div>`;


  }
  var html = ` <div class="card">
  
  <img src=${productsFilter[i].productPicture} alt="Adidas UltraBoost" style="width:100%">
  <h1>${productsFilter[i].productName}</h1>
  <h2>${productsFilter[i].productBrand}</h2>
  <p class="price">${productsFilter[i].productPrice}</p>
  <p>${productsFilter[i].productDescription}</p>
  <p>${productsFilter[i].productGender}</p>

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
}
listProducts(products)
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

