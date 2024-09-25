
import {Routes, Route} from "react-router-dom";
import List from "../components/catalog/List";
import Display from "../components/catalog/Display";
import Customers from "../components/crm/Customers";
import CustomerDetails from "../components/crm/CustomerDetails";
import CustomerDelete from "../components/crm/CustomerDelete";
import CustomerInsert from "../components/crm/CustomerInsert";
import CustomerUpdate from "../components/crm/CustomerUpdate";
import Storage from "../components/catalog/storage";

const AppRoutes = () => (
    <Routes>
        <Route path="/list" element={<List/>}/>
        <Route path="/display" element={<Display/>}/>
        <Route path="customers" element={<Customers/>}/>
                <Route path="/customers/details/:id" element={<CustomerDetails />} />
                <Route path="/customers/insert" element={<CustomerInsert />} />
                <Route path="/customers/update/:id" element={<CustomerUpdate />} />
                <Route path="/customers/delete/:id" element={<CustomerDelete />} />

                <Route path="/storage" element={<Storage/>}/>
    </Routes>
);
export default AppRoutes;