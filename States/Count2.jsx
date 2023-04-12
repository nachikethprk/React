import React from "react";

const Count2=()=>{
    let [count, setcount]=React.useState(0);
    
    let countincriment=()=>{
        setcount(count+1)
    }

    let countdecrement=()=>{
        setcount(count-1)
    }

    let countreset=()=>{
        setcount(0)
    }

    return(
        <>
        <h1>{count}</h1>
        <div>
            <button onClick={countincriment}>+increment</button>
            <button onClick={countdecrement}>-decrement</button>
            <button onClick={countreset}>Reset</button>
        </div>
        </>
    )
}
export default Count2