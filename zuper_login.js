
const usernameInput = document.getElementById('userName'); 
const passwordInput = document.getElementById('userPassword');
const loginBtnInput = document.getElementById('login-btn');


// To respond to the users click, I make use of the onclick property
// of the submit button and attach a function to it
loginBtnInput.onclick = function () {

    console.log('clicked')

     // check that input if not empty information 
if (usernameInput.value.length == 0) {
    alert ("hmmn, something went wrong. Please enter your username")
    return false;
} else if (passwordInput.value.length == 0) {
    alert ("hmmn, something went wrong. Please enter your password")
    return false;
}


//loging in
//Loop through users. Atm. I hardcoded a user...
if (usernameInput.value == "Seb" && passwordInput.value == "password"){
alert ("Login successfully");

// Redirecting to other page.
window.location = "zuper_indexPage.html"
    return false;
}
else{
    alert ("Hmn, something went wrong. Please type in your username and password")
    return false;
}

}