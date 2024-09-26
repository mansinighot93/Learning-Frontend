// import React, { useState } from 'react';
// import AuthService from '../services/Authservice';
// import './register.css';

// export default function Registration() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [firstname, setFirstname] = useState('');
//   const [lastname, setLastname] = useState('');
//   const [contactnumber, setContactnumber] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleEmailChange = (event) => setEmail(event.target.value);
//   const handlePasswordChange = (event) => setPassword(event.target.value);
//   const handleFirstnameChange = (event) => setFirstname(event.target.value);
//   const handleLastnameChange = (event) => setLastname(event.target.value);
//   const handleContactnumberChange = (event) => setContactnumber(event.target.value);

//   const handleRegister = (event) => {
//     event.preventDefault();
//     try {
//       const newUser = {
//         email,
//         password,
//         firstname,
//         lastname,
//         contactnumber,
//       };
//       AuthService.register(newUser);
//       setSuccess('Registration successful!');
//       console.log("Email:"+email,"Password:"+password,"firstName:"+firstname,"lastName:"+lastname,"contact:"+contactnumber);
//       setError('');
      
//       setEmail('');
//       setPassword('');
//       setFirstname('');
//       setLastname('');
//       setContactnumber('');
//     } catch (error) {
//       setError(error.message);
//       setSuccess('');
//     }
//   };

//   return (
//     <div>
//       <h2>Registration</h2>
//       <form onSubmit={handleRegister}>
//         <div>
//           <label>Email:</label>
//           <input type="email" value={email} onChange={handleEmailChange} required />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input type="password" value={password} onChange={handlePasswordChange} required />
//         </div>
//         <div>
//           <label>First Name:</label>
//           <input type="text" value={firstname} onChange={handleFirstnameChange} required />
//         </div>
//         <div>
//           <label>Last Name:</label>
//           <input type="text" value={lastname} onChange={handleLastnameChange} required />
//         </div>
//         <div>
//           <label>Contact Number:</label>
//           <input type="text" value={contactnumber} onChange={handleContactnumberChange} required />
//         </div>
//         <button type="submit">Register</button>
//         {error && <div className="error">{error}</div>}
//         {success && <div className="success">{success}</div>}
//       </form>
//     </div>
//   );
// }

import React, { useState } from 'react';
import AuthService from '../services/Authservice';
import './register.css';

export default function Registration() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    contactnumber: '',
    error: '',
    success: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const { email, password, firstname, lastname, contactnumber } = formData;

    try {
      const newUser = { email, password, firstname, lastname, contactnumber };
      AuthService.register(newUser);
      setFormData({ ...formData, success: 'Registration successful!', error: '' });
      console.log("Email:", email, "Password:", password, "First Name:", firstname, "Last Name:", lastname, "Contact:", contactnumber);
      setFormData({ email: '', password: '', firstname: '', lastname: '', contactnumber: '', error: '', success: '' });
    } catch (error) {
      setFormData({ ...formData, error: error.message, success: '' });
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleRegister}>
        {['email', 'password', 'firstname', 'lastname', 'contactnumber'].map((field) => (
          <div key={field}>
            <label>{field.charAt(0).toUpperCase() + field.slice(1).replace('number', ' Number')}:</label>
            <input
              type={field === 'password' ? 'password' : 'text'}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit">Register</button>
        {formData.error && <div className="error">{formData.error}</div>}
        {formData.success && <div className="success">{formData.success}</div>}
      </form>
    </div>
  );
}
