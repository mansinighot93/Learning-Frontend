import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee, updateEmployee} from '../redux/EmpAction';

const EmployeeForm = () => {
    const dispatch = useDispatch();
    const [id,setId] =useState('');
    const [firstname,setFirstname] =useState('');
    const [lastname,setLastname] =useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEmp = {id:Date.now(),firstname,lastname};
        dispatch(addEmployee(newEmp));
        setId('');
        setFirstname('');
        setLastname('');
    };

    return(
        <form onSubmit={handleSubmit}>
            <label>ID:-</label>
            <input type="number" value={id} onChange={(e)=>setId(e.target.value)} required/>
            <br/>
            <label>First Name:-</label>
            <input type="text" value={firstname} onChange={(e)=>setFirstname(e.target.value)} required/>
            <br/>
            <label>Last Name:-</label>
            <input type="text" value={lastname} onChange={(e)=>setLastname(e.target.value)} required/>
            <br/>
            <button onClick={()=>dispatch(addEmployee())}>ADD</button>
            <button onClick={()=>dispatch(updateEmployee())}>UPDATE</button>
            
        </form>
    )
};
export default EmployeeForm;