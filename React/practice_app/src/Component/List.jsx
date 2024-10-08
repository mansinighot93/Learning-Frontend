import Services from "../Services/Services";
import Details from "./Details";
const List = ()=>{
    const display=Services.getAllUsers();
        return(
        <div>
            <h3>Students Details</h3>
            <table border='2'>
                <tr>
                    <th>First Name</th>
                </tr>
                <th>Middle Name</th>
                <th>Last Name</th>
                <th>Contact Number</th>
                <th>Occupation</th>
                <th>Email ID</th>
                <th>Password</th>
                
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