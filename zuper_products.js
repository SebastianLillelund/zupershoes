// creating product class, constructed as an object:
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
// We create array containing the products
var products = []
var productsFiltered = []
function generateProducts() {
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
  productsFiltered = products
}
// Section related to filtering by size:
// we loop through each product in the array and loop through all sizes (looping in the size array of the array)
function getAllSizes() {
  generateProducts()
  var allSizes = []
  for (var i = 0; i < products.length; i++) {
    for (var j = 0; j < products[i].productSize.length; j++) {
      allSizes.push(products[i].productSize[j])
    };
  }
  // We create "unique" sizes (an array containing one of each available sizes)   
  //var uniqueSizesA = allSizes.filter((v, i , a) => a.indexOf(v) === i)
  var uniqueSizes = allSizes.filter(function (value, index, array) {
    // Example note of how this works: 
    // allSizes = [36, 45, 47, 36, 47]
    // value = 36
    // index = 3
    // array = [36, 45, 47]
    // if(0 === 3) { }
    if (array.indexOf(value)  === index) {
      return value
    }
  })

// We sort the sizes from low to high and create an option to select size in html 
  var sortedUniqueSizes = uniqueSizes.sort()
  // var options = ""
  var sizeSelectElement = document.getElementById("sizeFilterSelect");
  for (var i = 0; i < sortedUniqueSizes.length; i++) {
    // <select><option value="36">36</option></select>
    /* <option></option> */ var option = document.createElement("option")
    /* <option>36</option> */ option.text = sortedUniqueSizes[i]
    /* <option value="36">36</option> */ option.value = sortedUniqueSizes[i]
    /* <select><option value="36">36</option></select> */ sizeSelectElement.add(option)
  }
}
// We create a clearfilters/reset function 
getAllSizes()
// fires onClick in html-file
function clearFilters() {
  generateProducts()
  document.getElementById("productsContainer").innerHTML = ""
  listProducts(products)
}
// The actual filtering function
// function fires in html-file onChange.
function filterBySize() {
  // clear existing products from DOM
  document.getElementById("productsContainer").innerHTML = ""
  var sizeValue = document.getElementById("sizeFilterSelect").value
  // console.log(typeof sizeValue)
  generateProducts()
  if (!sizeValue) {
    productsFiltered = products
  } else {
    productsFiltered = productsFiltered.filter((product) => {
      if (product.productSize.includes(Number(sizeValue))) {
        return product
      }
    })
  }
  listProducts(productsFiltered)

}

// Section related to filtering by color:
function getAllColors() {
  var allColors = []
  for (var i = 0; i < products.length; i++) {
    for (var j = 0; j < products[i].productColor.length; j++) {
      allColors.push(products[i].productColor[j])
    };
  }
  // We create "unique" sizes (an array containing one of each available color) 
  var uniqueColors = allColors.filter((v, i, a) => a.indexOf(v) === i)
  var sortedUniqueColors = uniqueColors.sort()
  var options = ""
  var colorSelectElement = document.getElementById("colorFilterSelect");
  for (var i = 0; i < sortedUniqueColors.length; i++) {
    // 
    var option = document.createElement("option")
    option.text = sortedUniqueColors[i]
    option.value = sortedUniqueColors[i]
    colorSelectElement.add(option)
  }
  return options
}

getAllColors()
// The actual filtering function
// function fires in html-file onChange.
function filterByColor() {
  // clear existing products from DOM
  document.getElementById("productsContainer").innerHTML = ""
  var colorValue = document.getElementById("colorFilterSelect").value
  generateProducts()
  if (!colorValue) {
    productsFiltered = products
  } else {
    productsFiltered = productsFiltered.filter((product) => {
      if (product.productColor.includes(colorValue)) {
        console.log(product)
        return product
      }
    })
  }
  listProducts(productsFiltered)
 
  console.log(selectedFilters)
}

// Section related to filtering by price:

// The actual filtering function 
// function fires in html-file onChange.
function filterByFromPrice() {
  // clear existing products from DOM
  document.getElementById("productsContainer").innerHTML = ""
  var priceFrom = document.getElementById("priceFrom").value

  generateProducts()
  console.log(priceFrom)
  if (!priceFrom) {
    productsFiltered = products
  } else {
    productsFiltered = productsFiltered.filter((product) => {
      if (product.productPrice >= Number(priceFrom)) {
        return product
      }
    })
  }
  listProducts(productsFiltered)
}

// The actual filtering function 
// function fires in html-file onChange.
function filterByToPrice() {
  // clear existing products from DOM
  document.getElementById("productsContainer").innerHTML = ""
  var priceTo = document.getElementById("priceTo").value

  generateProducts()
  console.log(priceTo)
  if (!priceTo) {
    productsFiltered = products
  } else {
    productsFiltered = productsFiltered.filter((product) => {
      if (product.productPrice <= Number(priceTo)) {
        return product
      }
    })
  }
  listProducts(productsFiltered)
}


function listProducts(productsFilter) {
  // ----html ----- 
  // We loop through each product (in the array) and append the correct product attributions to the html-snippet - to be pushed to the html site.
  for (var i = 0; i < productsFilter.length; i++) {

    // looping through sizes
    var sizeHtml = "";
    for (var j = 0; j < productsFilter[i].productSize.length; j++) {
      sizeHtml += `
        <option id="${j + 1}" value="${productsFilter[i].productSize[j]}">  
          ${productsFilter[i].productSize[j]} 
        </option>`;
    }


    // looping through the color-array within the array. inception
    var colorHtml = "";
    for (var u = 0; u < productsFilter[i].productColor.length; u++) {
      colorHtml += ` <div>
  <input data-image="${productsFilter[i].productColor[u]}" class="${productsFilter[i].productColor[u]}" type="radio" id="${productsFilter[i].productColor[u]}-${i}" name="color-${i}" value="${productsFilter[i].productColor[u]}">
  <label for="${productsFilter[i].productColor[u]}-${i}"> <span> </span> </label>
</div>`;

    }
    var html = ` <div class="card">
  
  <img id="product-image-${i}" src=${productsFilter[i].productPicture} alt="${productsFilter[i].productName}" style="width:100%">
  <h1 id="product-name-${i}">${productsFilter[i].productName}</h1>
  <h2 id="product-brand-${i}">${productsFilter[i].productBrand}</h2>
  <p id="product-price-${i}" class="price">${productsFilter[i].productPrice}</p>
  <p id="product-description-${i}"> ${productsFilter[i].productDescription}</p>
  <p id="product-gender-${i}">${productsFilter[i].productGender}</p>
  <div class="color-choose">
              ${colorHtml}
            </div>
  <div>
  <select name="Size" id="size-selection-${i}">
  ${sizeHtml}
  </select>
</div>
<br>
<button class="add-cart-btn" onclick="updateCart(${i});" id="submit-${i}" value="${products[i].productId}"">Add to Cart</button>
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
