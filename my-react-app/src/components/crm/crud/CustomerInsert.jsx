import React, { useState } from 'react';
import customerservice from '../../../services/customerservice';

export const CustomerInsert = () => {
  const [newCustomer, setNewCustomer] = useState({
    id: '',
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    contactnumber: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({
      ...newCustomer,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    const allUsers = customerservice.getAll();
    newCustomer.id = allUsers.length + 1;


    customerservice.register(newCustomer);
    console.log("Updated Users List: ", customerservice.getAll());

    
    setNewCustomer({
      id: '',
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      contactnumber: ''
    });
  };

  return (
    <div>
      <h2>Insert New Customer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={newCustomer.email} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={newCustomer.password} onChange={handleInputChange} required />
        </div>
        <div>
          <label>First Name:</label>
          <input type="text" name="firstname" value={newCustomer.firstname} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" name="lastname" value={newCustomer.lastname} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Contact Number:</label>
          <input type="text" name="contactnumber" value={newCustomer.contactnumber} onChange={handleInputChange} required />
        </div>
        <button type="submit">Insert Customer</button>
      </form>
    </div>
  );
};
