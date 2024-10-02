
import React, { useEffect, useState } from 'react';
import { useDispatch} from 'react-redux';
import { deleteProduct} from '../../redux/ProductAction';
import { useNavigate, useParams } from 'react-router-dom';
import {getProductById,deleteProduct} from "../Services/ProductServicesFetch";

const ProductDelete = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        setError(errerror.message);
      }
    };
    fetchProduct();
  },[id]);

  const handleDelete = () => {
    if (product) {
      dispatch(deleteProduct(product.id));
      navigate('/');
    } else {
      alert('Product Not Found.');
      navigate('/');
    }
  };
  if (error) {
    return <h2>{error}</h2>;
  }
  

  return (
    <div>
      <h2>Are you sure you want to delete {customer.firstName} {customer.lastName}?</h2>
      <button onClick={handleDelete}>Yes</button>
      <button onClick={() => navigate('/')}>No</button>
    </div>
  );
};

export default ProductDelete;