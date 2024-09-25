import { Link } from "react-router-dom";
const Navbar = () => (
    <nav>
        <Link to="/customers">Customers List</Link>  |  |
        <Link to={`/customers/insert`}>Add New Customer</Link>
    </nav>
);
export default Navbar;
