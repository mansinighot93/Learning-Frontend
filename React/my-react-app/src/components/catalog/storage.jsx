import React, { useState, useEffect } from 'react';

const UserForm = () => {
  const [userData, setUserData] = useState({
    id: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    location: ''
  });

  // Load data from local storage on component mount
  useEffect(() => {
    const storedUserData = getData('userData');
    if (storedUserData) {
      setUserData(storedUserData);
    }
  }, []);

  // Save user data to local storage when it changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
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
        <input
          type="text"
          name="id"
          value={userData.id}
          onChange={handleChange}
          placeholder="ID"
        />
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="firstName"
          value={userData.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={userData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <input
          type="text"
          name="location"
          value={userData.location}
          onChange={handleChange}
          placeholder="Location"
        />
      </form>
      <h2>User Data:</h2>
      <pre>{JSON.stringify(userData, null, 2)}</pre>
    </div>
  );
};

export default UserForm;
