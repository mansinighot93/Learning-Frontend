import { ADD_EMPLOYEE, UPDATE_EMPLOYEE,DELETE_EMPLOYEE } from "../actions/EmpAction";

const initialState = {
    employee : [],
};

const EmployeeReducers = (state = initialState,action) => {
    switch(action.type){
        case ADD_EMPLOYEE : 
        return {...state,employee: [...state.employee,action.payload ]};

        case UPDATE_EMPLOYEE:
        return {
            ...state,
            employee : state.employee.map((e) =>
            e.id === action.payload.id ? action.payload : e
        ),
      };

      case DELETE_EMPLOYEE:
        return {
            ...state,
            employees: state.employee.filter((e) => e.id !== action.payload),
        };
        default:
        return state;

    }
};
export default EmployeeReducers;