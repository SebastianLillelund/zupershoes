// we create a class called User to be filled with the users information. The user class is constructed as an object. 
var users = []
// var loggedInUserTest = new User ("LoggedInUser1");


class User {
    constructor(firstName, lastName, address, email, userName, userPassword) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.email = email;
        this.userName = userName;
        this.userPassword = userPassword;
    }
}
