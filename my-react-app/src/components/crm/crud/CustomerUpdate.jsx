import React, { useState, useEffect } from 'react';
import customerservice from '../../../services/customerservice';
import { useParams } from 'react-router-dom'; 

export const CustomerUpdate = () => {
  const { id } = useParams(); 
  const [customer, setCustomer] = useState({
    id: '',
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    contactnumber: ''
  });

  useEffect(() => {
    const existingCustomer = customerservice.getUserById(parseInt(id)); 
    if (existingCustomer) {
      setCustomer(existingCustomer);
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomer({
      ...customer,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    customerservice.Update(customer);
    console.log("Updated Users List: ", customerservice.getAll());

   };

  return (
    <div>
      <h2>Update Customer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={customer.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={customer.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstname"
            value={customer.firstname}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastname"
            value={customer.lastname}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Contact Number:</label>
          <input
            type="text"
            name="contactnumber"
            value={customer.contactnumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Update Customer</button>
      </form>
    </div>
  );
};
