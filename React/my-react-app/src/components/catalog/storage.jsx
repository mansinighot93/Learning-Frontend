import React, { useState, useEffect } from 'react';
import CustomerService from "./../../services/customerservice";

const Storage = ({ id }) => {
  const [userData, setUserData] = useState({
    id: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    location: ''
  });

  useEffect(() => {
    const existingCustomer = CustomerService.getCustomerById(parseInt(id));
    if (existingCustomer) {
        setCustomer(existingCustomer);
    } else {
        setError(`Customer with ID ${id} not found.`);
    }
}, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveData('userData', userData);
    
  };

  const saveData = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  return (
    <div>
      <h2>User Data:</h2>
      {JSON.stringify(userData, null, 2)}
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" value={userData.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          First Name:
          <input type="text" name="firstName" value={userData.firstName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="lastName" value={userData.lastName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Contact Number:
          <input type="text" name="contactNumber" value={userData.contactNumber} onChange={handleChange} />
        </label>
        <br />
      </form>
    </div>
  );
};

export default Storage;
