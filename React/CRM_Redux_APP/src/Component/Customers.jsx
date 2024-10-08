// src/components/Customers.jsx
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { setCustomers } from '../redux/CustomerAction';

const Customers = () => {
  const dispatch = useDispatch();
  const customers = useSelector((state)=>state.customer.customers);

  useEffect(() => {
    if (customers.length === 0) {
      dispatch(setCustomers());
    }
  }, [dispatch, customers.length]);

  return (
    <div>
      <h2>Customer's Information Using Redux Architecture</h2>
      <Link to="/insert">Insert New Customer</Link>
      <ul>
        {customers.map(customer => (
          <li key={customer.id}>
            Customer :- {customer.firstName} {customer.lastName}
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
