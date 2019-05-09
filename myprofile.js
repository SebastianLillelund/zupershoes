var loggedUser;

// method for firing on pageLoad
document.addEventListener('DOMContentLoaded', function () {
    // Load in information from localStorage to var.
    loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    document.getElementById("firstname-label").innerHTML = loggedUser.firstName;
    document.getElementById("user-lastName-label").innerHTML = loggedUser.lastName;
    document.getElementById("user-address-label").innerHTML = loggedUser.address;
    document.getElementById("user-email-label").innerHTML = loggedUser.email;
    document.getElementById("user-userName-label").innerHTML = loggedUser.userName;

});

// Link 'logout-btn' to variable.
const logoutUserBtn = document.getElementById('logout-btn');
// function that fires "localStrage.clear()" when btn is clicked (onclick).
logoutUserBtn.onclick = () => {
    localStorage.removeItem('loggedUser');
    window.location.reload();
};

const historyBtn = document.getElementById('history-btn');
// function that fires "go to order.html when btn is clicked (onclick).
historyBtn.onclick = () => {
    window.location.assign('./order.html')
};