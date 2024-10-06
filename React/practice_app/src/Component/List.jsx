import Services from "../Services/Services";
import Details from "./Details";
const List = ()=>{
    const display=Services.getAllUsers();
        return(
        <div>
            <h3>All Customer List</h3>
            <table border='2'>
                <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email ID</th>
                <th>Contact Number</th>
                <th>Password</th>
                </tr>
                <tr>
                    {
                        display.map((list)=>(
                            <td><Details users={list}/></td>
                        ))
                    }
                </tr>
            </table>
        </div>
    )
}
export default List;