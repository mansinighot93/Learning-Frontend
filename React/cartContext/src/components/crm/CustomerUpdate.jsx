// components/CustomerUpdate.js

import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomerContext from "../../context/CustomerContext";

const CustomerUpdate = () => {
    const {customers, updateCustomer} = useContext(CustomerContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const [customer, setCustomer] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const existingCustomer =customers.find(c => c.id === parseInt(id));
        if (existingCustomer) {
            setCustomer(existingCustomer);
        } else {
            setError('Customer with ID ${id} not found.');
        }
    }, [id,customers]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomer(prevCustomer => ({
            ...prevCustomer,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(customer){
            updateCustomer(customer);
            navigate('/customers');
        }
    };
    if (error) return <p style={{ color: 'red' }}>{error}</p>;
    return (
        <>
            <h3>Update Existing Customer</h3>
            <div>
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>ID:</td>
                                <td>
                                    <input type="text" id="id" name="id" value={customer.id} disabled />
                                </td>
                            </tr>
                            <tr>
                                <td>First Name:</td>
                                <td>
                                    <input type="text" id="firstname" name="firstname" value={customer.firstname} onChange={handleChange} required/>
                                </td>
                            </tr>
                            <tr>
                                <td>Last Name:</td>
                                <td>
                                    <input type="text" id="lastname" name="lastname" value={customer.lastname} onChange={handleChange} required/>
                                        
                                </td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td>
                                    <input type="text" id="email" name="email" value={customer.email} onChange={handleChange} required/>
                                </td>
                            </tr>
                            <tr>
                                <td>Contact Number:</td>
                                <td>
                                    <input type="text" id="contactnumber" name="contactnumber" value={customer.contactnumber} onChange={handleChange} required/>
                                </td>
                            </tr>
                            <tr>
                                <td>Password:</td>
                                <td>
                                    <input type="text" id="password" name="password" value={customer.password} onChange={handleChange} required/>
                                </td>
                            </tr>
                            <tr>
                                <td><button type="submit">Update</button></td>  
                            </tr>
                        </tbody>
                    </table>
                </form>   
            </div>
        </>
    )
};

export default CustomerUpdate;
