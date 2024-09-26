import React, { useState, useEffect } from 'react';
import customerservice from '../../../services/customerservice';

export const Customerdelete = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    setCustomers(customerservice.getAll());
  }, []);

  const handleDelete = (id) => {
    customerservice.remove(id);
    setCustomers(customerservice.getAll());
    console.log("Updated Users List: ", customerservice.getAll());
  };

  return (
    <div>
      <h2>Customer List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Contact Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.email}</td>
              <td>{customer.firstname}</td>
              <td>{customer.lastname}</td>
              <td>{customer.contactnumber}</td>
              <td>
                <button onClick={() => handleDelete(customer.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
