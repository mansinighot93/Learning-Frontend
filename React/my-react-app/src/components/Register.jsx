import { useState } from "react";
import AuthService from "../services/authservice";
let productServices=[];

function Register(){
    const [id, setId]=useState('');
    const [firstname, setFirstname]=useState('');
    const [lastname,setLastname]=useState('');
    const [contactnumber, setContactnumber]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
 
    //change state based on text change event of text box (input)
    const onChangeId=(event)=>{
      setId(event.target.value);   //state is always changed using setter method defined in state
    }

    const onChangeFirst=(event)=>{
      setFirstname(event.target.value);   //state is always changed using setter method defined in state
    }

    const onChangeLast=(event)=>{
      setLastname(event.target.value);   //state is always changed using setter method defined in state
    }

    const onChangeContact=(event)=>{
      setContactnumber(event.target.value);   //state is always changed using setter method defined in state
    }

    const onChangeEmail=(event)=>{
      setEmail(event.target.value);   //state is always changed using setter method defined in state
    }
 
    const onChangePassword=(event)=>{
      setPassword(event.target.value);
    }
    const getInsertData=(event)=>{
        let id = parseInt(document.getElementById('id').value);
        let firstname = document.getElementById('firstname').value;
        let lastname = document.getElementById('lastname').value;
        let contactnumber = parseInt(document.getElementById('contactnumber').value);
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        return {
            id: id,
            firstname: firstname,
            lastname: lastname,
            contactnumber: contactnumber,
            email: email,
            password: password
        };
    }

    let product = getInsertData();
    svc.register(product);
    console.log(svc.getAllUsers());
    return (
        <div>
            <table>
            <tr>
                    <td>ID : </td>
                    <td><input type="text" value={id} onChange={onChangeId}></input></td>
                </tr>
                <tr>
                    <td>First Name: </td>
                    <td><input type="text" value={firstname} onChange={onChangeFirst}></input></td>
                </tr>
                <tr>
                    <td>Last Name: </td>
                    <td><input type="text" value={lastname} onChange={onChangeLast}></input></td>
                </tr>
                <tr>
                    <td>Mobile Number: </td>
                    <td><input type="text" value={contactnumber} onChange={onChangeContact}></input></td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td><input type="email" value={email} onChange={onChangeEmail}/></td>
                </tr>
                <tr>
                    <td>Pasword</td>
                    <td><input type="password" value={password} onChange={onChangePassword}/></td>
                </tr>
                  <tr>
                      <td><button  onClick={getInsertData}>Register</button></td>
              </tr>
            </table>
            <hr/>
        </div>
    );
  }
export default Register;