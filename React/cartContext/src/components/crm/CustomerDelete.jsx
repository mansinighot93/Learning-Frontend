// components/CustomerDelete.js

import { useContext} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CustomerContext } from "../../context/CustomerContext";

const CustomerDelete = () => {
    const { deleteCustomer } = useContext(CustomerContext);
    const { id } = useParams();
    const navigate = useNavigate();
  
    const handleYes = () => {
      deleteCustomer(parseInt(id));
      navigate('/customers');
    };

    const handleNo = () => {
        navigate('/customers');
    };

    return (
        <>
            <h3>Customer Details</h3>
            <p> Name: {customer.firstname} {customer.lastname}</p>
            <p>Email: {customer.email}</p>
            <p>Contact Number: {customer.contactnumber}</p>

            <h3>Do you want to delete this Customer?</h3>
            <button onClick={handleYes}>Yes</button>
            <button onClick={handleNo}>No</button>
        </>
    );
};

export default CustomerDelete;
