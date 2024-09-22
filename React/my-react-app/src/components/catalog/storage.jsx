import React, { useState, useEffect } from 'react';
import CustomerService from "./../../services/customerservice";

const Storage = ({id}) => {
  const [userData, setUserData] = useState({id: '',email: '',firstName: '',lastName: '',password: '',location: ''});

  // Load data from local storage on component mount
  useEffect(() => {
    const fetchedCustomer = CustomerService.getCustomerById(parseInt(id));
    if (fetchedCustomer) {
        setCustomer(fetchedCustomer);
    }
}, [id]);

  // Save user data to local storage when it changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,[name]: value,
    }));
    saveData('userData', { ...userData, [name]: value });
  };

  const saveData = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const getData = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };

  return (
    <div>
      <h1>User Form</h1>
      <form>
        <tr>
            <td><input type="text" name="id" value={userData.id} onChange={handleChange}/></td>
        </tr>
        <tr>
            <td><input type="text" name="firstname" value={userData.firstname} onChange={handleChange}/></td>
        </tr>
        <tr>
            <td><input type="text" name="lastname" value={userData.lastname} onChange={handleChange}/></td>
        </tr>
        <tr>
            <td><input type="text" name="email" value={userData.email} onChange={handleChange}/></td>
        </tr>
        <tr>
            <td><input type="text" name="contactnumber" value={userData.contactnumber} onChange={handleChange}/></td>
        </tr>
        
        
      </form>
      <h2>User Data:</h2>
      <pre>{JSON.stringify(userData, null, 2)}</pre>
    </div>
  );
};

export default Storage;
