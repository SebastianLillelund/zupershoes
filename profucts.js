const productNameID = document.getElementById('productName');
const productDescriptionID = document.getElementById('productDescription');
const productColorID = document.getElementById('productColor');
const productPriceID = document.getElementById('productPrice');
const productQuanityID = document.getElementById('productQuantity');
const productGenderID = document.getElementById('productGender');
const productBrandID = document.getElementById('productBrand');
const productPictureID = document.getElementById('productPicture');


var product = [];
submitBtnUI.onclick = function () {
    product.push(new ProductID(productNameID, productDescriptionID, productColorID, productPriceID, productQuanityID, productGenderID, productBrandID, productPictureID)) ;
    
    localStorage.setItem('products', JSON.stringify(products));


}



/* fra registration..

const firstNameUI = document.getElementById('firstName');
const lastNameUI = document.getElementById('lastName');
const addressUI = document.getElementById('address');
const usernameUI = document.getElementById('userName'); 
const passwordUI = document.getElementById('userPassword');
const checkboxUI = document.getElementById('terms');
const submitBtnUI = document.getElementById('submit-btn');

var firstName = firstNameUI.value
var lastName = lastNameUI.value
var address = addressUI.value
var username = usernameUI.value
var password = passwordUI.value

users.push(new User(firstName, lastName, address, username, password)) ;
    
        localStorage.setItem('users', JSON.stringify(users));
        
        */