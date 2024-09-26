// src/components/CustomerContainer.js
import React from 'react';
import { CustomerProvider } from '../Context/CustomerContext';
import Customer from './Customer';
import './Customer.css';

function CustomerContainer() {
  
  const users=customerservice.getAll();

  return (
   
    <CustomerProvider>
      <div>
        <Customer />
      </div>
    </CustomerProvider>
  );
}

export default CustomerContainer;
