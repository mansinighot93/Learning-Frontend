import { useState } from "react";
import Services from "../../Services/Services";
const Login=()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [message,setMessage]=useState('');

    const onLogin=(e)=>{
        e.preventDefault();
        try{
            let status = false;
            console.log(email,password);
            status=Services.validate(email,password);
            if(status === true){
                console.log("Login Successful...")
            }
            else{
                console.log("Login failed...");
            }
        }
        catch(error){
            console.log(error);
        }


        /*if(!email || !password){
            setMessage("Please Both Fields are Required");
            return;
        }
        console.log('Email ID: ' + email + ' , Password: ' + password);*/
    }

    return(
        <div>
            <h2>Are You Member?</h2>
            <form>
                <label>Email ID:-</label><input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} /><br/>
                <label>Password:-</label><input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} /><br/>
                <button onClick={onLogin}>Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    )

}
export default Login;