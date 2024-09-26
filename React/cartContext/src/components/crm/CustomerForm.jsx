// src/components/Customer.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { CustomerContext } from "../../context/CustomerContext";

const CustomerForm = () => {
  const { customers } = useContext(CustomerContext);
  const { id } = useParams();
  const customer = customers.find(c => c.id === parseInt(id));

  if (!customer) {
    return <h2>Customer not found</h2>;
  }

  return (
    <div>
      <h2>Customer Details</h2>
      <p>First Name:{customer.firstName}</p>
      <p>Last Name:{customer.lastName}</p>
      <p>Email:{customer.email}</p>
      <p>Contact Number:{customer.contactnumber}</p>
    </div>
  );
};
export default CustomerForm;