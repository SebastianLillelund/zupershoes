
// we create a class called order to be filled with the users cart info.
var orders = []
var itemToOrder = []

class Order {
    constructor(orderID, itemsOrder, priceOrder, userOrder, dateOrder, paymentStatus) {
        this.orderID = orderID;
        this.itemsOrder = itemsOrder;
        this.priceOrder = priceOrder;
        this.userOrder = userOrder;
        this.dateOrder = dateOrder;
        // We hardcode the paymentStatus, as we cannot integrate payment atm.
        this.paymentStatus = paymentStatus;
    }
};


// binding html order-btn to onclick function
const orderBtn = document.getElementById('order-btn');

orderBtn.onclick = function () {
    // binding only stored product info 
    for (let i = 0; i < itemsDb.length; i++) {
        // linking itemsDb to the users unique array of items + display array of items
            var itemToOrder = itemsDb[i][1];
    };

    // Pushing values to Order class
    orders.push(new Order(
        5,
        itemToOrder,
        priceTotal,
        loggedUser,
        'date',
        true));

    console.log(orders);

    localStorage.setItem('order', JSON.stringify(orders));
};

