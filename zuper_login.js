// Assign the html btn to variable.
const loginBtnInput = document.getElementById('login-btn');

// on page load: If users are empty, load in the user from localStorage to users array.
window.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('users') === null) {
    } else {
        users = JSON.parse(localStorage.getItem('users'));
        for (let i = 0; i < users.length; i++) {
            users[i] = new User(users[i].firstName, users[i].lastName, users[i].address, users[i].email, users[i].userName, users[i].userPassword);
        }
    };
});

// To respond to the users click, we make use of the onclick property
// of the login button and attach a function to it
loginBtnInput.onclick = function () {
    var usernameInput = document.getElementById('userName');
    var passwordInput = document.getElementById('userPassword');

    // check that input if not empty information 
    if (usernameInput.value.length == 0) {
        alert("hmmn, something went wrong. Please enter your username")
        return false;
    } else if (passwordInput.value.length == 0) {
        alert("hmmn, something went wrong. Please enter your password")
        return false;
    };

    // We loop through all our users and return true if we find a match
    for (var i = 0; i < users.length; i++) {

        // Bind user to a variable for easy use
        var user = users[i];

        // check user with array
        console.log("userName: " + user.userName + ". usernameInput: " + usernameInput.value)
        console.log("userPassword: " + user.userPassword + ". passwordInput: " + usernameInput.value)
        if (user.userName == usernameInput.value && user.userPassword == passwordInput.value) {
            console.log(user);


            //saving the logged in user:
            localStorage.setItem("loggedUser", JSON.stringify(user));


            alert("Login successfully");
            // Redirecting to other page.
            window.location = "products.html";
            return false;
        }

    } alert("Hmn, something went wrong. Please type in your username and password");

}