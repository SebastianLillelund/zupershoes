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

    </div>
   `

    }
    // Creating a container and appending the html var. above into the products.html after beginning.
    var orderContainer = document.getElementById("orderContainer");
    orderContainer.insertAdjacentHTML('beforeend', orderHtml);

});

        // // we loop through items that have been stored by user in itemsDb
        // for (let index = 0; index < itemsDb.length; index++) {
        //     // linking itemsDb to the users unique array of items + display array of items
        //     if (itemsDb[index][0] == loggedUser.userName) {
        //         var currentItem = itemsDb[index][1];
        //         var dbKey = itemsDb[index][2];
        //         // adds each currentItem to the priceTotal variable.
        //         priceTotal += currentItem.productPrice * 1;
        //         cartItemsHtml += `<table id="myTable">
        //     <tr>
        //         <td><img src="${currentItem.productimage}" style="width:75px" /></td>
        //         <td><strong>${currentItem.productBrand}</strong><td>
        //         <td>${currentItem.productName}<td>
        //         <td>DKK: ${currentItem.productPrice}<td>
        //         <td>Size: ${currentItem.size}<td>
        //         <td><button onClick="removeFromCart('${dbKey}')">Remove from cart</button><td>
        //     </tr>
        //     </table>`
        //     }
        // }