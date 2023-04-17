import React,{useState,useEffect} from 'react'

const Winwdt = () => {
    let [width, setwidth]=useState(window.innerWidth)
    console.log(width);
    useEffect(()=>{
        window.addEventListener("resize",()=>{
            setwidth(window.innerWidth)
        })
    })
  return (
    <>
    <div><h1>The Screen width is  {width}</h1></div>
   
    </>
  )
}

export default Winwdt