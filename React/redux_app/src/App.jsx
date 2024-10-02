import './App.css';
import Counter from './components/Counter';
import RatingsCounter from './custom_src/Component/RatingsCounter';
import LikesCounter from './custom_src/Component/LikesCounter';
function App() {

  return (
    <>
      <div>
        <h2>Transflower Learning Pvt.Ltd.</h2>
        <p>Redux Application</p>
        <hr/>
        <Counter/>
        <hr/>
        <RatingsCounter/>
        <hr/>
        <LikesCounter/>
      </div>
    </>
  )
}

export default App;
