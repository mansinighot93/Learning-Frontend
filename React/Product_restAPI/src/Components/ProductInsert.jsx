import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct } from '../Redux/ProductAction';
import { useNavigate } from 'react-router-dom';

const ProductInsert = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        title: '',
        description: '',
        unitPrice:'' ,
        quantity: '',
        likes: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createProduct(product));
        setProduct({ title: '', description: '', unitPrice: '', quantity: '', likes: '' });
        navigate('/');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: name === 'unitPrice' || name === 'quantity' || name === 'likes' ? parseFloat(value) : value
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Insert Product</h2>
            <div>
                <label>Title:</label>
                 <input type="text" name="title" value={product.title} onChange={handleChange} />
            </div>
            <div>
                <label>Description:</label> 
                <input name="description" value={product.description} onChange={handleChange} />
            </div>
            <div>
                <label>Unit Price:</label>
                 <input type="number" name="unitPrice" value={product.unitPrice} onChange={handleChange} />
            </div>
            <div>
                <label>Quantity:</label>
                <input type="number" name="quantity" value={product.quantity} onChange={handleChange} />
            </div>
            <div>
                <label>Likes:</label>
                <input type="number" name="likes" value={product.likes} onChange={handleChange} />
            </div>
            <button type="submit">Add Product</button>
        </form>
    );
};

export default ProductInsert;
