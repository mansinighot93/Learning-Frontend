import React, { createContext, useState, useEffect } from 'react';
import CustomerService from '../services/customerservice';

// Step 1: Create context
const CustomerContext = createContext();

// Step 2: Define Provider
export function CustomerProvider({ children }) {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = () => {
      const initialCustomers = CustomerService.getAll();
      setCustomers(initialCustomers);
    };

    fetchCustomers();
  }, []); 

  const addCustomer = (customer) => {
    CustomerService.insert(customer);
    setCustomers((prev) => [...prev,{ id: Date.now(), ...customer}]); 
    //setCustomers([...customers, { ...customer, id: customers.length + 1 }]);
  };

  const updateCustomer = (updatedCustomer) => {
    CustomerService.update(updatedCustomer);
    setCustomers(customers.map(c => (c.id === updatedCustomer.id ? updatedCustomer : c)));
  };

  const deleteCustomer = (id) => {
    CustomerService.remove(id); 
    setCustomers(customers.filter(customer => customer.id !== id));
  };

  return (
    <CustomerContext.Provider value={{ customers, addCustomer, updateCustomer, deleteCustomer }}>
      {children}
    </CustomerContext.Provider>
  );
}

export default CustomerContext;