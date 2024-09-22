import React, { useState, useEffect } from 'react';
import CustomerService from "./../../services/customerservice";

const Storage = ({id}) => {
  const [userData, setUserData] = useState({id: '',email: '',firstName: '',lastName: '',password: '',location: ''});

  useEffect(() => {
    const fetchedCustomer = CustomerService.getCustomerById(parseInt(id));
    if (fetchedCustomer) {
        setCustomer(fetchedCustomer);
    }
}, [id]);

  
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
      <h2>User Data:</h2>
      <pre>{JSON.stringify(userData, null, 2)}</pre>
    </div>
  );
};

export default Storage;
