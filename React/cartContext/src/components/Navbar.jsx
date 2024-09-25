import { Link } from "react-router-dom";
const Navbar = () => (
    <nav>
        <Link to="/customers">Customers List</Link>  |
        <Link to="/storage">Storage</Link>   
    </nav>
);
export default Navbar;
