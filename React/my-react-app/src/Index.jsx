import Login from "./components/Login";
import List from "./components/List";

function Index(){
    return (
        <div>
            <h2>Todays Fresh Flowers</h2>
            <hr/>
            <Login/>
            <List/>
        </div>
    );
}
export default Index;