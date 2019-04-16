// vi skal lave et lineitem object der henter info fra size, color, pid ind i stedet for i en array.
// Vi skal altså have en object-array med disse line-item arrays i + vores products array fra products.js.
// Den skal så kigge efter ID og kigge efter products classen
// Se Martins eksempel med Gin factory.


// click on button
 const updateCart = (index) => {

var size = document.getElementById(`size-selection-${index}`).value;
//querySelector is a method to get an html element. Since we're using query's we're not limited to retrieving ID's.
var color = document.querySelector(`input[name='color-${index}']:checked`).value;
var pId = document.getElementById(`submit-${index}`).value;

var itemToCart = [size, color, pId]

console.log(itemToCart);

localStorage.setItem('itemToCart', JSON.stringify(itemToCart));

};
// Load products based on stored pId.
