import { Link } from "react-router-dom";
import CustomerService from "../../services/customerservice";
 
 
const Customers=()=>{
 
    const customers= CustomerService.getAll();
 
    return(
        <>
        <h3>Customer's Details:- </h3>
            <ul>
                {
                    customers.map(customer=>(
                        <li key ={customer.id}>{customer.firstname}{customer.lastname}<Link to={`/crm/details/${customer.id}`} >Details</Link>|
                                                                    <Link to={`/crm/insert`}>Insert</Link> |
                                                                    <Link to={`/crm/update/${customer.id}`}>Update</Link> |
                                                                    <Link to={`/crm/delete/${customer.id}`}>Delete</Link> |
                                                                    
                                         
                        </li>
                    ))
                }
               
             </ul>
        </>
    )
};
export default Customers;