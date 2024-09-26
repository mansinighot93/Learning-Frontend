// CustomerDetails.jsx
import {useContext} from 'react';
import CustomerContext from '../../context/CustomerContext';
import { useParams } from "react-router-dom";

const CustomerDetails = () => {
    const { customers}=useContext(CustomerContext);
    const { id } = useParams();
    const customer = customers.find((c)=>c.id===parseInt(id));

    return (
        <>
            <h3>Customer Details</h3>
            <p>Name: {customer.firstname} {customer.lastname}</p>
            <p>Email: {customer.email}</p>
            <p>Contact Number: {customer.contactnumber}</p>
        </>
    );
};

export default CustomerDetails;
