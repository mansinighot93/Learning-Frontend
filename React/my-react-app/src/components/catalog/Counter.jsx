//React component : function component
//React component : function component
import { useState, useEffect } from "react";
const Counter =({likes})=>{
 
    console.log( " Counter component initialization");
 
    const[count, setCount]=useState(likes);
 
    //event handlers
    const increment=()=>{
        setCount(count+1);
        console.log( "increment method inoked..");
    }
 
    const decrement=()=>{
        setCount(count-1);
        console.log( "increment method inoked..");
    }
 
    useEffect(()=>{
        console.log("Effect is called....");
    },[count])
 
 
    return (
            <>
                <button onClick={decrement}>-</button>
                <label>Count:{count}</label>
                <button onClick={increment}>+</button>
            </>
    );
}
export default Counter;
 

/*
//Class Component
import { Component } from "react";
class Counter extends Component{
 
    //you can handle Component life Cycle events
 
    constructor(props){
        console.log(" React Component constuctor is called....")
        super(props);
        this.state={
            count:0
        }
    }
 
    componentDidMount() {
        console.log("Component did Mount is called...")
    }
 
   
    increment=()=>{
        this.setState( (prevState)=>( { count: prevState.count+1}));
    }
 
    decrement=()=>{
        this.setState( (prevState)=>( { count: prevState.count-1}));
    }
 
    shouldComponentUpdate() {
        console.log("Should component update is called.");
        return true;
    }
 
    render(){
        return (
                <>
                <button onClick={this.decrement}>-</button>
                <label>Count: {this.state.count}</label>
                <button onClick={this.increment}>+</button>
                </>
        );
    }
 
 
 
    componentWillUnmount() {
        console.log("Releasing resource if allocated during lifecyle of counter component");
    }
 
}
export default Counter;
*/