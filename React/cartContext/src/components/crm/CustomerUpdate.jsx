// components/CustomerUpdate.js

import { useContext,useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Customer from "./Customer";
import CustomerContext from "../../context/CustomerContext";

const CustomerUpdate = () => {
    const { customers, updateCustomer } = useContext(CustomerContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const [initial, setInitial] = useState(null);

    useEffect(() => {
        const custUpdate=customers.find((c)=>c.id===parseInt(id));
        if(custUpdate){
            setInitial(custUpdate);
        }
    }, [id,customers]);

    const handleSubmit = (e) => {
        updateCustomer({...updateCustomer,id:parseInt(id)});
        navigate('/');
    }
    return (
        <>
            <h3>Update Existing Customer</h3>
                {initial ? (
                    <Customer onSubmit={handleSubmit} initial={initial} />
                ) : (<p>Loading customer data...</p>
            )}
        </>
    )
};

export default CustomerUpdate;
