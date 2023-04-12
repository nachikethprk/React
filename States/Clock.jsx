import React from "react";

const Clock=()=>{
    let [qsn, setqsn]=React.useState(100);
    
    let hour=()=>{
        setqsn(qsn/60)
        
    }

    let min=()=>{
        setqsn(qsn%60)
    }

    let reset=()=>{
        setqsn(100)
    }

    return(
        <>
        <h1>Hour {qsn}</h1>
        <h1>Min {qsn}</h1>
            <button onClick={hour}>Convert</button>

            
        
        </>
    )
}
export default Clock