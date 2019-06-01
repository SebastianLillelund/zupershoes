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
}

// ----- PageLoad all products //
window.onload = function () {
    generateProducts();
    loadAllProducts();
    generateOptions();
};


// ----- Filter ----- //
//Declare empty variables to 
var dummyProduct = [];
var filterProduct = [];

// Filter Reset btn
clearFilters = () => {
    location.reload();
}


// On change in the html-filter elements: 
changeDummy = () => {
    dummyProduct = {
        size: document.getElementById("sizeFilterSelect").value,
        color: document.getElementById("colorFilterSelect").value,
        productPriceTo: document.getElementById("priceTo").value,
        productPriceFrom: document.getElementById("priceFrom").value,
    };
    // console.log(dummyProduct);
    filteredProducts();
};


filteredProducts = () => {
    filterProduct = [];

    // Loop through all products:
    for (i = 0; i < products.length; i++) {

        // Check for color search:
            // False by default
        var colorMatch = false;
            // looping though products and their colors
        for (j = 0; j < products[i].productColor.length; j++) {
            // if the color of the product is the same as the chosen in filter (dummyProduct) --> it's a match!
            if (products[i].productColor[j] == dummyProduct.color) {
                colorMatch = true;
            }
        } // search for color is empty = all true (to avoid empty shop without choice)
        if (dummyProduct.color == '') {
            colorMatch = true;
        }

        // Check for size search:
        var sizeMatch = false;
        for (j = 0; j < products[i].productSize.length; j++) {
            if (products[i].productSize[j] == dummyProduct.size) {
                sizeMatch = true;
            }
        } // search for size is empty = all true
        if (dummyProduct.size == '') {
            sizeMatch = true;
        }

        // Check for min cost search:
        var minCostMatch = false;
        if (products[i].productPrice >= dummyProduct.productPriceFrom) {
            minCostMatch = true;
        }
        // search for min price is empty = all true
        if (dummyProduct.productPriceFrom == '') {
            minCostMatch = true;
        }
        // Check for max cost search:
        var maxCostMatch = false;
        if (products[i].productPrice <= dummyProduct.productPriceTo) {
            maxCostMatch = true;
        }
        // search for min price is empty = all true
        if (dummyProduct.productPriceTo == '') {
            maxCostMatch = true;
        }

        // Check for true / matches: All products looped through with "true" --> pushed into filteredProduct. 
        // If e.g. "white" is searched for but not found --> product is false and not pushed:
        if (colorMatch == true && sizeMatch == true && minCostMatch == true && maxCostMatch == true) {
            filterProduct.push(products[i])
        }
    }
    loadFilterProducts();
};


/* ---- create choise options in the filter ----- */
var allColors = []
var allSizes = []

generateOptions = () => {
    generateColor()
    generateSize()
}

generateSize = () => {
    // ------ Generate size options

    //Loop through all products
    for (var i = 0; i < products.length; i++) {
        // loop through productSize's
        for (var j = 0; j < products[i].productSize.length; j++) {
            // push sizes into Allsizes array.
            allSizes.push(products[i].productSize[j])
        };
    }
    // We create "unique" size (an array containing only one of each available color) 
    var uniqueSizes = allSizes.filter((v, i, a) => a.indexOf(v) === i)
    // .sort, sorts the array (from smallest to largest in this case)
    var sortedUniqueSizes = uniqueSizes.sort()

    // loop through all uniqueSizes:
    for (var i = 0; i < sortedUniqueSizes.length; i++) {
        // I create a 'shortcut'-word to the html element:
        var sizeSelect = document.getElementById("sizeFilterSelect");
        // I create option elements to the html
        var option = document.createElement("option");
        option.text = sortedUniqueSizes[i];
        // document.getElementById("sizeFilterSelect").add(option) --> adding to the html element.
        sizeSelect.add(option);
    };
}


// ------ Generate color options
generateColor = () => {
    for (var i = 0; i < products.length; i++) {
        for (var j = 0; j < products[i].productColor.length; j++) {
            allColors.push(products[i].productColor[j])
        };
    }
    // We create "unique" color (an array containing one of each available color) 
    var uniqueColors = allColors.filter((v, i, a) => a.indexOf(v) === i)
    var sortedUniqueColors = uniqueColors.sort()

    for (var i = 0; i < sortedUniqueColors.length; i++) {
        var colorSelect = document.getElementById("colorFilterSelect");
        var option = document.createElement("option");
        option.text = sortedUniqueColors[i];
        colorSelect.add(option);
        console.log(sortedUniqueColors[i])
    };
}

// ----- load filter products ----- //
// used onchange for any and all of the filter html elements.
loadFilterProducts = () => {
    // reset html / clear
    document.getElementById("productsContainer").innerHTML = '';

    // ----html ----- 
    // We loop through each product (in the array) and append the correct product attributions to the html-snippet - to be pushed to the html site.
    for (var i = 0; i < filterProduct.length; i++) {
        // looping through sizes
        var sizeHtml = "";
        for (var j = 0; j < filterProduct[i].productSize.length; j++) {
            sizeHtml += `
          <option id="${j + 1}" value="${filterProduct[i].productSize[j]}">  
            ${filterProduct[i].productSize[j]} 
          </option>`;
        }
        // looping through the color-array within the array. inception
        var colorHtml = "";
        for (var u = 0; u < filterProduct[i].productColor.length; u++) {
            colorHtml += ` <div>
            <input data-image="${filterProduct[i].productColor[u]}" class="${filterProduct[i].productColor[u]}" type="radio" id="${filterProduct[i].productColor[u]}-${i}" name="color-${i}" value="${products[i].productColor[u]}">
            <label for="${filterProduct[i].productColor[u]}-${i}"> <span> </span> </label>
          </div>`;
        }
        var html = ` <div class="card">
                <img id="product-image-${i}" src=${filterProduct[i].productPicture} alt="${filterProduct[i].productName}" style="width:100%">
                <h1 id="product-name-${i}">${filterProduct[i].productName}</h1>
                <h2 id="product-brand-${i}">${filterProduct[i].productBrand}</h2>
                <p id="product-price-${i}" class="price">${filterProduct[i].productPrice}</p>
                <p id="product-description-${i}"> ${filterProduct[i].productDescription}</p>
                <p id="product-gender-${i}">${filterProduct[i].productGender}</p>
                <div class="color-choose">
                            ${colorHtml}
                          </div>
                <div>
                <select name="Size" id="size-selection-${i}">
                ${sizeHtml}
                </select>
              </div>
              <br>
              <button class="add-cart-btn" onclick="updateCart(${i});" id="submit-${i}" value="${filterProduct[i].productId}"">Add to Cart</button>
              </p>
              </div>`;
        // Creating a container and appending the html var. above into the products.html after beginning.

        var container = document.getElementById("productsContainer");
        container.insertAdjacentHTML('beforeend', html);
    }
};


// ----- load all products ----- //
// only used on page-load
loadAllProducts = () => {
    // ----html ----- 
    // We loop through each product (in the array) and append the correct product attributions to the html-snippet - to be pushed to the html site.
    for (var i = 0; i < products.length; i++) {
        // looping through sizes
        var sizeHtml = "";
        for (var j = 0; j < products[i].productSize.length; j++) {
            sizeHtml += `
          <option id="${j + 1}" value="${products[i].productSize[j]}">  
            ${products[i].productSize[j]} 
          </option>`;
        }
        // looping through the color-array within the array. inception
        var colorHtml = "";
        for (var u = 0; u < products[i].productColor.length; u++) {
            colorHtml += ` <div>
            <input data-image="${products[i].productColor[u]}" class="${products[i].productColor[u]}" type="radio" id="${products[i].productColor[u]}-${i}" name="color-${i}" value="${products[i].productColor[u]}">
            <label for="${products[i].productColor[u]}-${i}"> <span> </span> </label>
          </div>`;
        }
        var html = ` <div class="card">
                <img id="product-image-${i}" src=${products[i].productPicture} alt="${products[i].productName}" style="width:100%">
                <h1 id="product-name-${i}">${products[i].productName}</h1>
                <h2 id="product-brand-${i}">${products[i].productBrand}</h2>
                <p id="product-price-${i}" class="price">${products[i].productPrice}</p>
                <p id="product-description-${i}"> ${products[i].productDescription}</p>
                <p id="product-gender-${i}">${products[i].productGender}</p>
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
              </div>`;
        // Creating a container and appending the html var. above into the products.html after beginning.
        var container = document.getElementById("productsContainer");
        container.insertAdjacentHTML('beforeend', html);
    }
};


