// src/components/Customer.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { CustomerContext } from '../Context/CustomerContext';

const Customer = () => {
  const { customers } = React.useContext(CustomerContext);
  const { id } = useParams();
  const customer = customers.find(c => c.id === parseInt(id));

  if (!customer) {
    return <h2>Customer not found</h2>;
  }

  return (
    <div>
      <h2>Customer Details</h2>
      <p><strong>First Name:</strong> {customer.firstName}</p>
      <p><strong>Last Name:</strong> {customer.lastName}</p>
      <p><strong>Email:</strong> {customer.email}</p>
      <p><strong>Contact Number:</strong> {customer.contactnumber}</p>

      
    
    </div>
  );
};

export default Customer;
