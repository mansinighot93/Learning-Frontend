import { useState } from "react";
import { Link } from "react-router-dom";
import Services from "../../Services/Services";
const Register=()=>{
    const [firstname,setFirstname]=useState('');
    const [middlename,setMiddlename]=useState('');
    const [lastname,setLastname]=useState('');
    const [email,setEmail]=useState('');
    const [occupation,setOccupation]=useState('');
    const [contactnumber,setContactnumber]=useState('');
    const [Password,setPassword]=useState('');
    const [message,setMessage]=useState('');

    const onRegister=(e)=>{
        e.preventDefault();
        if(!firstname || !lastname || !email || !contactnumber || !Password || !middlename || !occupation){
            setMessage("Please Fill in the required fileds..");
            return;
        }
        const newUser={
            firstname,
            middlename,
            lastname,
            contactnumber,
            occupation,
            email,
            Password
        };
        Services.register(newUser).then(response=>{
            if(response.success){
                setMessage("Registration Successful..");
            }
            else{
                setMessage("Registration Failed...");
            }
        })
        .catch(() => {
            setMessage("Registration Failed Please Try Again...");
        });
        console.log('First Name: ' + firstname + 
            'Middle Name: '+ middlename + 
            ' , Last Name: ' + lastname + 
            ' , Contact Number: ' + contactnumber +
            ', Occupation: ' + occupation +
            ', Email ID: ' + email + 
            ' , Password: ' + Password );
    }
    return(
        <div>
            <h2>Online Exam Portal</h2>
            <form onSubmit={onRegister}>
                <label>First Name:-</label><input type="text" name="firstname" value={firstname} onChange={(e)=>setFirstname(e.target.value)} /><br/>
                <label>Middle Name:-</label><input type="text" name="middlename" value={middlename} onChange={(e)=>setMiddlename(e.target.value)} /><br/>
                <label>Last Name:-</label><input type="text" name="lastname" value={lastname} onChange={(e)=>setLastname(e.target.value)}/><br/>
                <label>Conatct Number:-</label><input type="tel" name="contactnumber" value={contactnumber} onChange={(e)=>setContactnumber(e.target.value)}/><br/>
                <label>Occupation:-</label><input type="text" name="occupation" value={occupation} onChange={(e)=>setOccupation(e.target.value)}/><br/>
                <label>Email ID:-</label><input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
                <label>Password:-</label><input type="password" name="password" value={Password} onChange={(e)=>setPassword(e.target.value)}/><br/>
                <button type='submit'>Register</button>
            </form>
            {message && <p> {message} </p>}
        </div>
    )

}
export default Register;