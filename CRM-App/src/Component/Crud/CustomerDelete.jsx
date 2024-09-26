// src/components/CustomerDelete.jsx
import React, { useContext } from 'react';
import { CustomerContext } from '../Context/CustomerContext';
import { useNavigate, useParams } from 'react-router-dom';

const CustomerDelete = () => {
  const { deleteCustomer } = useContext(CustomerContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteCustomer(parseInt(id));
    navigate('/');
  };

  return (
    <div>
      <h2>Are you sure you want to delete this customer?</h2>
      <button onClick={handleDelete}>Yes</button>
      <button onClick={() => navigate('/')}>No</button>
    </div>
  );
};

export default CustomerDelete;
