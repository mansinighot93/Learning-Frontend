import { Link } from "react-router-dom";
import CustomerService from "../../services/customerservice";
 
 
const Customers=()=>{
 
    const customers= CustomerService.getAll();
 
    return(
        <>
        <table border="2">
        <h3>Customer's Information</h3>
            <ul>
                {
                    customers.map(customer=>(
                        <li key ={customer.id}>{customer.firstname} {customer.lastname}   <Link to={`/customers/details/${customer.id}`} >Details</Link> | |
                                                                    <Link to={`/customers/insert`}>Insert</Link> |  |
                                                                    <Link to={`/customers/update/${customer.id}`}>Update</Link> |  |
                                                                    <Link to={`/customers/delete/${customer.id}`}>Delete</Link> 
                                                                    
                                         
                        </li>
                    ))
                }
               
             </ul>
            </table>
        </>
    )
};
export default Customers;