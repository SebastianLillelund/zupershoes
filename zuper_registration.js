// We create a binding for each input element so we don't have to use the 'document' object each time

const firstNameUI = document.getElementById('firstName');
const lastNameUI = document.getElementById('lastName');
const addressUI = document.getElementById('address');
const emailUI = document.getElementById('email');
const usernameUI = document.getElementById('userName'); 
const passwordUI = document.getElementById('userPassword');
const checkboxUI = document.getElementById('terms');
const submitBtnUI = document.getElementById('submit-btn');


// To respond to clicks = we make use of the onclick property triggering a function.
submitBtnUI.onclick = function () {

// we create a function to test for correctly input e-mails.


    // We validate input information as non-empty values. Returning alerts if the user missed an input field // if the password is less than 8 characters.
if (firstNameUI.value.length == 0) {
    alert ("hmmn, something went wrong. Please fill out your first name")
    return false;
} else if (lastNameUI.value.length == 0) {
    alert ("hmmn, something went wrong. Please fill out your last name")
    return false;
} else if (addressUI.value.length == 0){
    alert ("hmmn, something went wrong. Please fill out your address")
    return false;
} else if (usernameUI.value.length == 0) {
    alert ("hmmn, something went wrong. Please create a username for your profile")
    return false;
} else if (emailUI.value.length == 0) {
    alert ("hmmn, something went wrong. Please create an email for your profile")
    return false;
} else if (passwordUI.value.length == 0) {
    alert ("hmmn, something went wrong. Your profile needs a password")
    return false;
} else if (passwordUI.value.length <= 7) {
    alert ("hmmn, something went wrong. You password needs to be 8 characters or more")
    return false;
} else if (!checkboxUI.checked) {
    alert ("hmmn, something went wrong. Please read and agree to our terms")
    return false;
} 
    // If checked (agreed to the terms and conditions) = create a new user object with the input information.
    if(checkboxUI.checked == true) {        

        // To store the user we add him to the array of users
        users.push(new User(firstNameUI.value,
            lastNameUI.value,
            addressUI.value,
            emailUI.value,
            usernameUI.value,
            passwordUI.value)) ;
            
            localStorage.setItem('users', JSON.stringify(users));
            //redirect user to login page
            window.location.assign('./zuper_login.html')
    }    
        
}
