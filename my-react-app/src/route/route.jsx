import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import AboutUs from "../components/Aboutus";
import Contact from "../components/contact";
import Services from "../components/Services";
import List from "../components/List";
import Login from "../components/Login";
import Registration from "../components/Registration";
import Bi from "../components/chart/Bi";
import BarChart from "../components/chart/BarChart";
import LineChart from "../components/chart/LineChart";
import PieChart from "../components/chart/PieChart";
import { DashboardEx } from "../components/DashboardEx";
import { settingsEx } from "../components/crm/settingsEx";
import { CustomerUpdate } from "../components/crm/crud/CustomerUpdate";
import { Customerdelete } from "../components/crm/crud/Customerdelete";
import { CustomerInsert } from "../components/crm/crud/CustomerInsert";
import Customer from "../components/crm/crud/Customer";
import Customers from "../components/crm/crud/Customers";

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/list" element={<List />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/DashboardEx" element={<DashboardEx/>}>
            {/* Nested Routes */}
            <Route path="profile" element={<profile/>} />
            <Route path="settingsEx" element={<settingsEx/>} />
        </Route>
        <Route path="/bi" element={<Bi />}>
            {/* Nested Routes */}
            <Route path="bar"  element={<BarChart />} />
            <Route path="line" element={<LineChart />} />
            <Route path="pie"  element={<PieChart />} />
        </Route>
        <Route path="customers" element={<Customers/>}/> 
        <Route path="customers/:id" element={<Customer/>}/>
         <Route path="customers/update/:id" element={ <CustomerUpdate/>}/>
          <Route path="customers/delete/:id" element={<Customerdelete/>}/> 
          <Route path="customers/insert" element={<CustomerInsert/>}/>
    </Routes>
);

export default AppRoutes;
