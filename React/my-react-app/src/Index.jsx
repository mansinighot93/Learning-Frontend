import Login from "./components/Login";
import List from "./components/List";
import Counter from "./components/Counter";


function Index(){
    return (
        <div>
            <h2>Todays Fresh Flowers</h2>
            <hr/>
            <Login/>
            <List/>
            <Counter/>
        </div>
    );
}
export default Index;