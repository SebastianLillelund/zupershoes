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
console.log(ProductID);


/* fra registration..

const firstNameUI = document.getElementById('firstName');
const lastNameUI = document.getElementById('lastName');
const addressUI = document.getElementById('address');
const usernameUI = document.getElementById('userName'); 
const passwordUI = document.getElementById('userPassword');
const checkboxUI = document.getElementById('terms');
const submitBtnUI = document.getElementById('submit-btn');


users.push(new User(firstName, lastName, address, username, password)) ;
    
        localStorage.setItem('users', JSON.stringify(users));
        
        */