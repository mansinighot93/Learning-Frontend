import { useState } from 'react';

const Customer = ({ onSubmit, initial = {} }) => {
  const [customer, setCustomer] = useState({firstname: '',lastname: '',email: '',contactnumber: '',...initial});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({
      ...customer,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(customer); 
  };

  return (
      <form onSubmit={handleSubmit}>
            <tr>
                <td>First Name:-<input type="text" name="firstName"  value={customer.firstname} onChange={handleChange} required /></td>
            </tr>
            <tr>
                <td>Last Name:- <input type="text" name="lastName"  value={customer.lastname} onChange={handleChange} required /></td>
            </tr>
            <tr>
                <td>Email ID:- <input type="email" name="email" value={customer.email} onChange={handleChange} required /></td>
            </tr>
            <tr>
                <td>Contact Number:- <input type="text" name="contactNumber"  value={customer.contactnumber} onChange={handleChange} required /></td>
            </tr>
            <br/>
            <button type="submit">Submit</button>
      </form>
    );
};

export default Customer;