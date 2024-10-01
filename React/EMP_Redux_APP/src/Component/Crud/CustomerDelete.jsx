// src/components/CustomerDelete.jsx
import { deleteCustomer } from '../../redux/CustomerAction';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import React, {useEffect,useState} from 'react';

const CustomerDelete = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();
    const customers = useSelector((state) => state.customer.customers);
    const [customer, setCustomer] = useState(null);

  useEffect(() => {
    if (customers.length === 0) {
      dispatch(setCustomer());
    } else {
      const existingCustomer = customers.find((c) => c.id === parseInt(id));
      setCustomer(existingCustomer);
    }
  }, [dispatch, customers, id]);

  const handleDelete = () => {
    dispatch(deleteCustomer(parseInt(id)));
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
