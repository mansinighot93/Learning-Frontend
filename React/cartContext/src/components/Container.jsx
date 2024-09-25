import {BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import AppRoutes from "../Routes/Route";
function Container() {
    return (
      <div>
        <h2>Cutomer Services</h2>
        <BrowserRouter>
            <Navbar/>
            <hr/>
            <AppRoutes/>
        </BrowserRouter>
      </div>
    );
  }
  export default Container;