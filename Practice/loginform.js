/*function Submit() 
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "" || password === "") 
    {
        document.getElementById("error-message").innerHTML = "Both fields are required.";
    } 
    else 
    {
        document.getElementById("error-message").innerHTML = "";
        console.log("Username: " + username);
        console.log("Password: " + password);
    }
}
*/
var loginform = [];

const onInsertButtonClick = () => {
    var txtUsername = document.getElementById("username");
    var Username = txtUsername.value;

    var txtPassword = document.getElementById("password");
    var Password = txtPassword.value;

    if (Username && Password)
    {
        var Login = {
            id: loginform.length + 1,
            Username: Username,
            Password: Password
        };

        loginform.push(Login);
        console.log(loginform);
    } 
    else {
        console.log("Both fields are required.");
    }
};