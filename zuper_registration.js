// Because I will have to perform multiple actions with the various
// elements of our HTML form, I create a binding for each input element
// so I will not have to use the 'document' object each time
const firstNameUI = document.getElementById('firstName').value;
const lastNameUI = document.getElementById('lastName').value;
const addressUI = document.getElementById('address').value;
const usernameUI = document.getElementById('userName').value; 
const passwordUI = document.getElementById('userPassword').value;
const checkboxUI = document.getElementById('terms');
const submitBtnUI = document.getElementById('submit-btn');




// To respond to the users click, I make use of the onclick property
// of the submit button and attach a function to it
submitBtnUI.onclick = function () {

    console.log('clicked')
    console.log(users)
    
    // validate information **commentet out due to error**
    // if(firstNameUI.length == 0 || lastNameUI.length == 0 || addressUI.length == 0 || usernameUI.length == 0
        //  || passwordUI.length == 0 || passwordUI.length > 7 || checkboxUI.checked == false) {
        //  alert ("hmmn, something went wrong. Please fill out all fields in the signup form :)")
        // }
        // return false

    // If the user has agreed to the terms and conditions,
    // I create a new user object from his input
    if(checkboxUI.checked == true) {
        var firstName = firstNameUI.value
        var lastName = lastNameUI.value
        var username = usernameUI.value
        var password = passwordUI.value

        /* Not letting the same username be used twice (unique users)
       for (let i=0; i< username.length; i++) {
            if usernameUI.value === username[i].username) {
                //update the span to let the user know that he has to choose a differnt username
            } return false
        }
        */
        // To store the user I add him to the array of users (DB)
        users.push(new User(firstName, lastName, username, password))
        console.log(users)

        //redirect user to login page
       // window.location.assign('./login.html')
    }


    
        
}