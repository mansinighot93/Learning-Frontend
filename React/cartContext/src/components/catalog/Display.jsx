import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

//state less component

function Display() {
  const { display, removeItem, getTotalPrice } = useContext(CartContext);
  return (
    <div>
      <h2>Cutomers Details</h2>
      <hr/>
    
      {display.length === 0 ? (<p></p>) : (
        <ul>
          {display.map((customer) => (
                    <ul>
                      <li key={customer.id}>
                        {customer.firstname} {customer.lastname} {customer.email} {customer.contactnumber}
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                      </li>
                      </ul>
          ))}
        </ul>
      )}
      <hr/>
    </div>
  );
}

export default Display();