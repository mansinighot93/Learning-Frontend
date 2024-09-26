import { Link } from "react-router-dom";
import CustomerContext from "../../context/CustomerContext";
import { useContext } from "react";
 
 
const Customers=()=>{
 
    const {customers}= useContext(CustomerContext);
 
    return(
        <>
        <h3>Customer's Information</h3>
        <Link to={`/customers/insert`}>Add New Customer</Link>
            <ul>
                {
                    customers.map(customer=>(
                        <li key ={customer.id}>{customer.firstname} {customer.lastname}  
                        <tr>
                         <Link to={`/customers/details/${customer.id}`} >Details</Link> | |
                                                                    <Link to={`/customers/update/${customer.id}`}>Update</Link> |  |
                                                                    <Link to={`/customers/delete/${customer.id}`}>Delete</Link>                                
                        </tr>           
                        </li>
                    ))
                }
            </ul>
        </>
    )
};
export default Customers;