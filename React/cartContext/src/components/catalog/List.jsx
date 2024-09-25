import React from 'react';
import Customers from '../crm/Customers';
import { CartProvider } from '../../context/CartContext';
import CustomerService from '../../services/customerservice';
import Display from './Display';

function List() {
   const customers= CustomerService.getAll();
  
  return (
    <>
    <CartProvider>
      <div>
        <table>
          <tr>
          {
            customers.map((customer) => (
              <td><Customers id={customer.id} firstname={customer.firstname} lastname={customer.lastname}
              contactnumber={customer.contactnumber}/></td>
            ))
        }
        </tr>
        </table>
        <Display/>
        </div>
        </CartProvider>
    </>
  )
}

export default List;