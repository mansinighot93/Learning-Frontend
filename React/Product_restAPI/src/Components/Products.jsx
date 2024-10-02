import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../Redux/ProductAction';
import { Link } from 'react-router-dom';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  return (
    <div>
      <h2>Product Information</h2>
      <Link to="/insert">Insert New Product</Link>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            Product: {product.title} |{' '}
            <Link to={`/details/${product.id}`}>Details</Link> |{' '}
            <Link to={`/update/${product.id}`}>Update</Link> |{' '}
            <Link to={`/delete/${product.id}`}>Delete</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
