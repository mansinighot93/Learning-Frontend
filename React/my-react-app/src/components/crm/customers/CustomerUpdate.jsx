import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import CustomerService from "../../../services/customerservice";

const CustomerUpdate=()=>{

    const { id } = useParams();
    
    const [customer, setCustomer]=useState(
        {   id: '', email: '', 
            firstname:"", lastname:"",
            contactnumber:""
        },
    );

    useEffect(() => {
        const existingcustomer =CustomerService.getCustomerById( parseInt(id));
        if (existingcustomer) {
            setCustomer(existingcustomer);
        }
    }, [id]);


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
        console.log(customer);
        CustomerService.Update(customer);
        console.log(CustomerService.getAll());
    }
    
    return(
        <>
        <h3>Update Existing Customer</h3>
          
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
                        <td><button type="submit">Update</button></td>  
                    </tr>
                </table>
            </form>   
          </div>
        </>
    )
};

export default CustomerUpdate;