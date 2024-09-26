// src/components/Customers.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CustomerContext } from './Context/CustomerContext';

const Customers = () => {
  const { customers } = useContext(CustomerContext);

  return (
    <div>
      <h1>Transflower Customers</h1>
      <Link to="/insert">Insert New Customer</Link>
      <ul>
        {customers.map(customer => (
          <li key={customer.id}>Customer=
            {customer.firstName} {customer.lastName}||
            <Link to={`/customers/${customer.id}`}>Details</Link> | |
            <Link to={`/update/${customer.id}`}>Update</Link> | |
            <Link to={`/delete/${customer.id}`}>Delete</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Customers;
