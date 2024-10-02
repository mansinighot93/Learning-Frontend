import useCounter from "./useCounter";

const  RatingsCounter=()=>{
    const { count, increment, decrement, reset } = useCounter(0);
    return(
        <div>
            <h3>Counter:- {count}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}
export default  RatingsCounter;