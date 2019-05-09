// This document handles orders. All orders are saved here to be displayed historically.
var orders = [];
var orderHtml = '';

// method for firing on pageLoad
document.addEventListener('DOMContentLoaded', function () {
    // Load in information from localStorage to var.
    orders = JSON.parse(localStorage.getItem('order'));

    // First of all, we loop through all orders made by the user
    for (i = 0; orders.length > i; i++) {
        // for each order made we create an order html-card element
        orderHtml +=

            // first we append the ID and date for each order.
            `
    <div class="card">
 <h2> Your order: ${orders[i]["orderID"]} </h2>
 <p id="dateOrder-${i}"> ${orders[i]["dateOrder"]}</p>
    <body>`

        // secondly, we loop through i=orders and every orders embedded array of items. 
        // Moreover, we then loop through the items array with j
        for (j = 0; orders[i]["itemsOrder"].length > j; j++) {
            var item = orders[i]["itemsOrder"][j]
            orderHtml +=
                // lastly, we take out the productName of each item and add it to orderHtml
                `<p id="itemsOrder-${i}">Item: ${item[1].productName} </p> `;
        };

        // Final element in orderHtml is .priceOrcer and billing information stored in the order class
        orderHtml += `
<p id="priceOrder-${i}">Total: DKK ${orders[i]["priceOrder"]}</p>
    <p id="userOrder-${i}">Billing: ${orders[i]["userOrder"]["firstName"]} ${orders[i]["userOrder"]["lastName"]} </p>
    <p id="userOrder-${i}">${orders[i]["userOrder"]["address"]}</p>

    </div>`
    }
    // Creating a container and appending the html var. above into the products.html after beginning.
    var orderContainer = document.getElementById("orderContainer");
    orderContainer.insertAdjacentHTML('beforeend', orderHtml);

});
