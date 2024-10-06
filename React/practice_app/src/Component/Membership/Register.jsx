import { useState } from "react";
const Register=()=>{
    const [firstname,setFirstname]=useState('');
    const [lastname,setLastname]=useState('');
    const [email,setEmail]=useState('');
    const [contactnumber,setContactnumber]=useState('');
    const [Password,setPassword]=useState('');
    const [message,setMessage]=useState('');

    const onRegister=(e)=>{
        e.preventDefault();
        if(!firstname || !lastname || !email || !contactnumber || !Password){
            setMessage("Please Fill in the required fileds..");
            return;
        }
        console.log('First Name: ' + firstname + ' , Last Name: ' + lastname + ', Email ID: ' + email + ' , Password: ' + Password );
    }
    return(
        <div>
            <h2>Membership Form</h2>
            <form>
                <label>First Name:-</label><input type="text" name="fisrtname" value={firstname} onChange={(e)=>setFirstname(e.target.value)} /><br/>
                <label>Last Name:-</label><input type="text" name="lastname" value={lastname} onChange={(e)=>setLastname(e.target.value)}/><br/>
                <label>Email ID:-</label><input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
                <label>Conatct Number:-</label><input type="number" name="contactnumber" value={contactnumber} onChange={(e)=>setContactnumber(e.target.value)}/><br/>
                <label>Password:-</label><input type="password" name="password" value={Password} onChange={(e)=>setPassword(e.target.value)}/><br/>
                <button onClick={onRegister}>Register</button>
            </form>
            {message && <p> {message} </p>}
        </div>
    )

}
export default Register;