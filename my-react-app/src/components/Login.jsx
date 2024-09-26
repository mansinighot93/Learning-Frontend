// import React, { useState } from 'react';
// import AuthService from '../services/Authservice';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const onChangeEmail = (event) => {
//     setEmail(event.target.value);
//   };

//   const onChangePassword = (event) => {
//     setPassword(event.target.value);
//   };

//   const onLogin = (event) => {
//     event.preventDefault(); // Prevent the form from refreshing the page
//     try {
//       const isValid = AuthService.validate(email, password);
//       if (isValid) {
//         console.log('Login successful');
//         setError('');
//       } else {
//         setError('Invalid email or password');
//         console.log('Invalid Please check Email and Password');
//       }
//     } catch (error) {
//       console.log(error);
//       setError('An error occurred during login');
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={onLogin}>
//         <table>
//           <thead>
//             <tr>
//               <th>Label</th>
//               <th>Data</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Email</td>
//               <td>
//                 <input type="email" value={email} onChange={onChangeEmail} required />
//               </td>
//             </tr>
//             <tr>
//               <td>Password</td>
//               <td>
//                 <input type="password" value={password} onChange={onChangePassword} required />
//               </td>
//             </tr>
//             <tr>
//               <td></td>
//               <td>
//                 <button type="submit">Login</button>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//         {error && <div className="error">{error}</div>}
//       </form>
//     </div>
//   );
// }

// export default Login;


import { useState } from "react";
import AuthService from "../services/Authservice";
 
function Login() {
    //Define state for login
    const [email, setEmail]=useState('ravi.tambade@transflower.in');
    const [password, setPassword]=useState('seed');
 
    //change state based on text change event of text box (input)
    const onChangeEmail=(event)=>{
      setEmail(event.target.value);   //state is always changed using setter method defined in state
    }
 
    const onChangePassword=(event)=>{
      setPassword(event.target.value);
    }
 
    const onLogin=(event)=>{
     // console.log("on login method is getting invoked");
        try{
          let status=false;
          console.log("Email:"+email,"Password:"+ password);
          status=AuthService.validate(email, password);
          if(status ===true){    
            console.log("login successful");
          }
          else{  
            console.log("login failed");
          }
        }
        catch(error){
          console.log(error);
        }
    }
 
  return (
    <>
      <div>
       
        <table>
        <tr>
          <th>Label</th>
          <th>Data</th>
     
        </tr>
          <tr>
            <td>Email</td>
            <td><input type="email" value={email} onChange={ onChangeEmail}/></td>
          </tr>
          <tr>
            <td>Pasword</td>
            <td><input type="password" value={password} onChange={ onChangePassword}/></td>
          </tr>
          <tr>
            <td> </td>
            <td><button  onClick={onLogin}>Login</button></td>
          </tr>
        </table>
       
        </div>
    </>
  )
}
 
export default Login;
 