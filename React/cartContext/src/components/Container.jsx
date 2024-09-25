import {BrowserRouter as Router} from "react-router-dom";
import { CustomerProvider } from '../context/CustomerContext';
import Navbar from "./Navbar";
import AppRoutes from "../routes/route";
function Container() {
    return (
      <div>
        <h2>Cutomer Services</h2>
        <CustomerProvider>
            <Router>
                <Navbar/>
                <hr/>
                <AppRoutes />
            </Router>
        </CustomerProvider>
      </div>
    );
  }
  export default Container;