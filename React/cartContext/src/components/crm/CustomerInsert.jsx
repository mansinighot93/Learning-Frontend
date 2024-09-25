import { useNavigate } from "react-router-dom";
import {useContext, useState } from "react";
import CustomerContext from "../../context/CustomerContext";

const CreateCustomer = () => {
    const {addCustomer}=useContext(CustomerContext);
    const navigate = useNavigate();
    const [customer, setCustomer] = useState({ Email: '', firstname: '', lastname: '', contactNumber: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomer({ ...customer, [name]: value });
    };

    const handleSubmit = (newCustomer) => {
        newCustomer.preventDefault();
        //setCustomer((prev) => [...prev,{ id: Date.now(), ...customer}]);
        addCustomer(customer);
        navigate("/customers");
    };

    return (
        <div>
            <h2>Create New Customer</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="email" name="Email" value={customer.Email} onChange={handleChange} />
                </label>
                <br />
                <label>
                    First Name:
                    <input type="text" name="firstname" value={customer.firstname} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Last Name:
                    <input type="text" name="lastname" value={customer.lastname} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Contact Number:
                    <input type="text" name="contactNumber" value={customer.contactNumber} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default CreateCustomer;
