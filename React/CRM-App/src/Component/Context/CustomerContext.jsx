// src/contexts/CustomerContext.js
import React, { createContext, useState, useEffect } from 'react';
import { CustomerService } from '../service/CustomerService';

export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    setCustomers(CustomerService.getCustomers());
  }, []);

  const addCustomer = (customer) => {
    CustomerService.addCustomer(customer);
    setCustomers(CustomerService.getCustomers());
  };

  const updateCustomer = (customer) => {
    CustomerService.updateCustomer(customer);
    setCustomers(CustomerService.getCustomers());
  };

  const deleteCustomer = (id) => {
    CustomerService.deleteCustomer(id);
    setCustomers(CustomerService.getCustomers());
  };

  return (
    <CustomerContext.Provider value={{ customers, addCustomer, updateCustomer, deleteCustomer }}>
      {children}
    </CustomerContext.Provider>
  );
};
