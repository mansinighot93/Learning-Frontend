import { Link } from "react-router-dom";

const Navbar = () => (
    <nav>
        <Link to="/">Home</Link> |
        <Link to="/list">List</Link> |
        <Link to="/aboutus">About</Link> |
        <Link to="/contact">Contact</Link> |
        <Link to="/services">Services</Link> ||
        <Link to="/login">Login</Link> ||
        <Link to="/Registration">Register</Link>||
        <Link to="/DashboardEx">Dashboard</Link>||
        <Link to="/bi">bi</Link>||
        <Link to="/Customers">Customers</Link>
    </nav>
);

export default Navbar;
