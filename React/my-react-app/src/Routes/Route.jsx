
import {Routes, Route} from "react-router-dom";
import Home from "../components/standard/Home";
import Aboutus from "../components/standard/Aboutus";
import Contact from "../components/standard/Contact";
import Services from "../components/standard/Services";
import List from "../components/catalog/List";
import Login from "../components/membership/Login";
import Register from "../components/membership/Register";
import Dashboard from "../components/crm/Dashboard";
import LineChart from "../components/charts/Linechart";
import PieChart from "../components/charts/Piechart";
import BarChart from "../components/charts/Barchart";
import Bi from "../components/charts/Bi";
import Profile from "../components/crm/Profile";
import Settings from "../components/crm/Settings";

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path="/login" element= {<Login/>}/>
        <Route path="/register" element={<Register/>}/>

        <Route path="/dashboard" element={<Dashboard/>}>
            <Route path="profile" element={<Profile/>}/>
            <Route path="settings" element={<Settings/>}/>
        </Route>
        <Route path="/bi" element={<Bi/>}>
            <Route path="line" element={<LineChart/>}/>
            <Route path="pie" element={<PieChart/>}/>
            <Route path="bar" element={<BarChart/>}/>
        </Route>
    </Routes>
);
export default AppRoutes;