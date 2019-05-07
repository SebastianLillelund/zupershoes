var loggedUser;
document.addEventListener('DOMContentLoaded', function(){ 
// your code goes here
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