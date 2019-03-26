const productNameID = document.getElementById('productName');
const productDescriptionID = document.getElementById('productDescription');
const productColorID = document.getElementById('productColor');
const productPriceID = document.getElementById('productPrice');
const productQuanityID = document.getElementById('productQuantity');
const productGenderID = document.getElementById('productGender');
const productBrandID = document.getElementById('productBrand');
const productPictureID = document.getElementById('productPicture');

const submitBtnUI = document.getElementById('myButton');


var products = [];
submitBtnUI.onclick = function () {
    products.push(new ProductID(productNameID, productDescriptionID, productColorID, productPriceID, productQuanityID, productGenderID, productBrandID, productPictureID)) ;
    
    localStorage.setItem('products', JSON.stringify(products));


}
console.log(products);


/* fra registration..
NEXT step: give values to each product in order to save as ProductID in the above function.
        */