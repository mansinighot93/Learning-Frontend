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
var loginform=[];
var count=loginform.length;
const onInsertButtonClick=()=>{
    var txtUsername=document.getElementById("username");
    var Username=txtUsername.value ;

    var txtPassword=document.getElementById("password");
    var Password=txtPassword.value ;
};

var Login={
    id:loginform.length+1,
    Username:username,
    Password:password
}

loginform.push(Login);
console.log(loginform);