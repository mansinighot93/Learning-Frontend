import { useState } from "react";
import CustomerService from "../../../services/customerservice";

const CustomerInsert=()=>{

    
    const [customer, setCustomer]=useState(
        {   id: '', email: '', 
            firstname:"", lastname:"",
            contactnumber:""
        },
    );

    const handleChange=(e)=>{
        //console.log( "text change event ");
        //console.log(e.target);
        const {name, value}=e.target;
        setCustomer((prevCustomer)=>(
            {
                ...prevCustomer, [name]:value
            }));
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log( "Form submit button clicked");
        console.log(customer);
        CustomerService.register(customer);
        console.log(CustomerService.getAll());
    }
    return(
        <>
        <h3>Insert New Customer</h3>
          
          <div>
            <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td>Id:</td>
                        <td> <input type="text" id="id"  name="id" value={customer.id} onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td>First Name:</td>
                        <td> <input type="text" id="firstname"  name="firstname" value={customer.firstname} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td>Last Name:</td>
                        <td> <input type="text" id="lastname"  name="lastname" value={customer.lastname} onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td> <input type="email" id="email"  name="email" value={customer.email} onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td>Contact Number:</td>
                        <td> <input type="text" id="contactnumber"  name="contactnumber" value={customer.contactnumber} onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <td>Action</td>
                        <td><button type="submit">Insert</button></td>  
                    </tr>
                </table>
            </form>   
          </div>
        </>
    )
};

export default CustomerInsert;