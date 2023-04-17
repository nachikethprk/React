import React,{useState, useEffect} from 'react'

const Incri = () => {
    let [count,setcount]=useState(0)

    useEffect(()=>{
        document.title=`you clicked ${count} times`
    },[count])
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>{
            setcount(count+1)
        }}>Incriment</button>
    </div>
  )
}

export default Incri