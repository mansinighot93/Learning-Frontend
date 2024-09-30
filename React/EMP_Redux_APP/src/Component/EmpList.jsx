import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {addEmployee,updateEmployee, deleteEmployee } from '../redux/EmpAction';

const EmployeeList = () => {
    const employee = useSelector((state) => state.employee.employee) || [];
    const dispatch = useDispatch();

    const handleAddEmployee = (newEmployee) => {
        dispatch(addEmployee(newEmployee));
    };

    const handleUpdateEmployee = (updatedEmployee) => {
        dispatch(updateEmployee(updatedEmployee));
    };

    const handleDeleteEmployee = (id) => {
        dispatch(deleteEmployee(id));
    };
    
    return (
        <div>
            <h2>Employee List</h2>
            <ul>
                {employee.length === 0 ? (
                <li>No employees found.</li>
                ) : (
                employee.map((emp) => (
                    <li key={emp.id}>
                    {emp.firstname}
                    <button onClick={() => handleUpdateEmployee({ ...employee, name: 'Updated Name' })}>Update</button>
                    <button onClick={() => handleDeleteEmployee(employee.id)}>Delete</button>
                    </li>
                ))
                )}
            </ul>
        </div>
    )
}
export default EmployeeList;