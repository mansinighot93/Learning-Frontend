
import {Routes, Route} from "react-router-dom";
import CustomerDelete from "../components/crm/CustomerDelete";
import CustomerDetails from "../components/crm/CustomerDetails";
import CustomerUpdate from "../components/crm/CustomerUpdate";
import CustomerInsert from "../components/crm/CustomerInsert";
import Customers from "../components/crm/Customers";
const AppRoutes = () => (
    <Routes>
        <Route path="customers" element={<Customers/>}/>
                <Route path="/customers/details/:id" element={<CustomerDetails />} />
                <Route path="/customers/insert" element={<CustomerInsert />} />
                <Route path="/customers/update/:id" element={<CustomerUpdate />} />
                <Route path="/customers/delete/:id" element={<CustomerDelete />} />
    </Routes>
);
export default AppRoutes;