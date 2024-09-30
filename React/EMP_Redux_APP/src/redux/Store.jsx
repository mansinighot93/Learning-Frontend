import { legacy_createStore as createStore} from "redux";
import EmployeeReducers from "./EmpReducer";

const store=createStore(EmployeeReducers);
export default store;