import React, { Fragment, useState } from "react";

const Counter = () => {
    

const [count,setCount] =useState(0);

    return (
        <Fragment>
        <div>
            <h1>Counter App: {count}</h1>
            <button onClick={() =>
                { 
                   
                    setCount(count +1)}}>Increent</button>
            <button onClick={
                
                () =>{
                    if(count >0)
                    setCount(count -1)
                    }}>Decrement</button>
        </div>
        <button onClick={
                
                () =>{
                    if(count >0)
                    setCount(count * 2)
                    }}>Decrement</button>
        
        </Fragment>
    );
}

export default Counter;