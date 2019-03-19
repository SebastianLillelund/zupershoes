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

if(firstNameUI.value.length === 0) {
    document.getElementById('resultSpan').innertext = 'Please provide username & password'
   return false
}

    console.log('clicked')
    console.log(users)
