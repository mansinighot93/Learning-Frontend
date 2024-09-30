export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';

export const addEmployee = (e) => ({
    type : ADD_EMPLOYEE,
    payload : e,
});

export const updateEmployee = (e) => ({
    type : UPDATE_EMPLOYEE,
    payload : e,
});

export const deleteEmployee = (id) => ({
    type : DELETE_EMPLOYEE,
    payload : id,
});