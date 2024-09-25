import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

function Product({ id, name, image, price }) {
  const { addItem } = useContext(CartContext);

  const handleAddToCart = () => {
    addItem({ id, name, price, quantity:1});
  };

  return (
    <div>
      <tr>
        <td><img src={image} widht="150" height="150"/></td>
      </tr>
      <tr>
        <td><h4>Name:-{name}</h4></td>
      </tr>
      <tr>
        <td><h4></h4><p>₹{price}</p></td>
      </tr>
      <tr>
        <td><button onClick={handleAddToCart}>Add to Cart</button></td>
      </tr>
    </div>
  );
}

export default Product;