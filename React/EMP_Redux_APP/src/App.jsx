import './App.css';
import EmployeeForm from './components/EmpForm';
import EmployeeList from './components/EmpList';

function App() {

  return (
    <div>
      <h1>Employee Management System</h1>
      <EmployeeForm/>
      <EmployeeList/>
    </div>
  )
}

export default App;
