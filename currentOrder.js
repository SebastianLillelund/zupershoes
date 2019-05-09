currentOrderHtml ='';

// method for firing on pageLoad
document.addEventListener('DOMContentLoaded', function () {
    currentOrder = JSON.parse(localStorage.getItem('currentOrder'));
// displaying current order / lastest order

    // for each order made we create an order html-card element
    currentOrderHtml +=
        // first we append the ID and date for each order.
    
`<div class="card">
<h2> Your order: ${orders[orders.length-1]["orderID"]} </h2>
<p id="dateOrder"> ${orders[orders.length-1]["dateOrder"]}</p>
<body>`

    // secondly, we loop through i=orders and every orders embedded array of items. 
    // Moreover, we then loop through the items array with j
    for (j = 0; orders[orders.length-1]["itemsOrder"].length > j; j++) {
        var item = orders[orders.length-1]["itemsOrder"][j]
        currentOrderHtml +=
            // lastly, we take out the productName of each item and add it to orderHtml
            `<p id="itemsOrder">Item: ${item[1].productName} </p> `;
    };

    // Final element in orderHtml is .priceOrcer and billing information stored in the order class
    currentOrderHtml += `
<p id="priceOrder">Total: DKK ${orders[orders.length-1]["priceOrder"]}</p>
<p id="userOrder">Billing: ${orders[orders.length-1]["userOrder"]["firstName"]} ${orders[orders.length-1]["userOrder"]["lastName"]} </p>
<p id="userOrder">${orders[orders.length-1]["userOrder"]["address"]}</p>

</div>`

// Creating a container and appending the html var. above into the products.html after beginning.
var currentOrderContainer = document.getElementById("currentOrderContainer");
currentOrderContainer.insertAdjacentHTML('beforeend', currentOrderHtml);

});