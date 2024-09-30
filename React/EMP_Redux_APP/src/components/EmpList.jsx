import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { deleteEmployee } from '../actions/EmpAction';

const EmployeeList = () => {
    const employee = useSelector((state) => state.employee.employee) || [];
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Employee List</h2>
      <ul>
        {employee.length === 0 ? (
          <li>No employees found.</li>
        ) : (
          employee.map((emp) => (
            <li key={emp.id}>
              {emp.firstname} - {emp.lastname}
              <button onClick={() => dispatch(deleteEmployee(emp.id))}>Delete</button>
            </li>
          ))
        )}
      </ul>
        </div>
    )
}
export default EmployeeList;