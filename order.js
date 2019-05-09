
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
            var itemToOrder = itemsDb;
    };

    // creating a timestamp. 
    // The Date() method creates a Date object set to the users current date and time.
    var time = Date();
     
    // Pushing values to Order class
    orders.push(new Order(
        Math.floor(Math.random() * 10000000),
        itemToOrder,
        priceTotal,
        loggedUser,
        time,
        true));
    // Store order in locaslStorage under the key name "order".
    localStorage.setItem('order', JSON.stringify(orders));


};

