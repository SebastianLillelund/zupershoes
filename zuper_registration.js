// Because I will have to perform multiple actions with the various
// elements of our HTML form, I create a binding for each input element
// so I will not have to use the 'document' object each time
const firstNameUI = document.getElementById('firstName')
const lastNameUI = document.getElementById('lastName')
const adressUI = document.getElementById('adress')
const usernameUI = document.getElementById('userName') 
const passwordUI = document.getElementById('userPassword')
const checkboxUI = document.getElementById('terms')
const submitBtnUI = document.getElementById('submit-btn')




// To respond to the users click, I make use of the onclick property
// of the submit button and attach a function to it
submitBtnUI.onclick = function () {

    console.log('clicked')
    console.log(users)
    
    // validate firstName it not blank
    if(firstNameUI.value.length == 0) {
         document.getElementById('resultSpan').innertext = 'Please provide username & password'
         return false
        }

    //check if the password is >8 digits:
    if (passwordUI.value.length < 8) {
            document.getElementById('password').innertext = "Password too short, please have at least 8 characters'"
            return false
        }

    
    

    // If the user has agreed to the terms and conditions,
    // I create a new user object from his input
    if(checkboxUI.checked) {
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