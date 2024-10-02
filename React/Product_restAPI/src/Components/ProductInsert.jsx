import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProduct as addProductAction } from '../Redux/ProductAction';
import { addProduct } from '../Services/ProductServicesFetch';

const ProductInsert = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({ title: '', unitprice: '', quantity: '', description: '', likes: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = { ...product, id: Date.now() };

    try {
      const response = await addProduct(newProduct);
      dispatch(addProductAction(response));
      navigate('/');
    } catch (error) {
      alert('Failed to add product: ' + error.message); 
    }
  };

  return (
    <div>
      <h2>Insert New Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={product.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" name="description" value={product.description} onChange={handleChange} required />
        </div>
        <div>
          <label>Unit Price:</label>
          <input type="number" name="unitprice" value={product.unitprice} onChange={handleChange} required />
        </div>
        <div>
          <label>Quantity:</label>
          <input type="number" name="quantity" value={product.quantity} onChange={handleChange} required />
        </div>
        <div>
          <label>Likes:</label>
          <input type="number" name="likes" value={product.likes} onChange={handleChange} required />
        </div>
        <button type="submit">Insert</button>
      </form>
    </div>
  );
};

export default ProductInsert;
