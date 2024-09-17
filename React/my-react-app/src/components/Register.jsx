import { useState } from "react";
import AuthService from "../services/authservice";


function Register() {
  const [newUser, setNewUser] = useState({
    id:'',
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    contactnumber: ''
  });
  const handleRegisterChange = (event) => {
    setNewUser({
      ...newUser,[event.target.name]: event.target.value
    });
  };
  const onRegister = () => {
    AuthService.register(newUser);
    setNewUser({
      id:'',
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      contactnumber: ''
    });
  };
  return (
  <div>
    <table>
      <tr>
        <td>ID : </td>
        <td><input type="text" value={newUser.id} onChange={handleRegisterChange}></input></td>
      </tr>
      <tr>
        <td>First Name: </td>
        <td><input type="text" value={newUser.firstname} onChange={handleRegisterChange}></input></td>
      </tr>          
      <tr>
        <td>Last Name: </td>
        <td><input type="text" value={newUser.lastname} onChange={handleRegisterChange}></input></td>
      </tr>
      <tr>
        <td>Mobile Number: </td>
        <td><input type="text" value={newUser.contactnumber} onChange={handleRegisterChange}></input></td>
      </tr>
      <tr>
        <td>Email</td>
        <td><input type="email" value={newUser.email} onChange={handleRegisterChange}/></td>
      </tr>
      <tr>
        <td>Pasword</td>
        <td><input type="password" value={newUser.password} onChange={handleRegisterChange}/></td>
      </tr>
      <tr>
        <td><button  onClick={onRegister}>Register</button></td>
      </tr>
    </table>
    <hr/>
  </div>
);
}
export default Register;