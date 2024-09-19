// components/CustomerInsert.js

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomerService from "../../../services/customerservice";

const CustomerInsert = () => {
    const navigate = useNavigate();
    const [customer, setCustomer] = useState({
        email: '',
        firstname: "",
        lastname: "",
        contactnumber: "",
        password: ""
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomer(prevCustomer => ({
            ...prevCustomer,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            // Assign a unique ID
            const newId = CustomerService.getAll().length > 0 
                ? Math.max(...CustomerService.getAll().map(c => c.id)) + 1 
                : 1;
            const newCustomer = { id: newId, ...customer };
            CustomerService.register(newCustomer);
            alert("Customer registered successfully.");
            navigate("/customers"); // Navigate to customer list or appropriate page
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <>
            <h3>Insert New Customer</h3>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>First Name:</td>
                                <td>
                                    <input 
                                        type="text" 
                                        id="firstname"  
                                        name="firstname" 
                                        value={customer.firstname} 
                                        onChange={handleChange} 
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Last Name:</td>
                                <td>
                                    <input 
                                        type="text" 
                                        id="lastname"  
                                        name="lastname" 
                                        value={customer.lastname} 
                                        onChange={handleChange} 
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td>
                                    <input 
                                        type="email" 
                                        id="email"  
                                        name="email" 
                                        value={customer.email} 
                                        onChange={handleChange} 
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Contact Number:</td>
                                <td>
                                    <input 
                                        type="text" 
                                        id="contactnumber"  
                                        name="contactnumber" 
                                        value={customer.contactnumber} 
                                        onChange={handleChange}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Password:</td>
                                <td>
                                    <input 
                                        type="password" 
                                        id="password"  
                                        name="password" 
                                        value={customer.password} 
                                        onChange={handleChange}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Action</td>
                                <td><button type="submit">Insert</button></td>  
                            </tr>
                        </tbody>
                    </table>
                </form>   
            </div>
        </>
    )
};

export default CustomerInsert;
