import React from 'react'

const Std =(props)=>{
    console.log(props);
    let data =props.data
   return (
     <div>
 <table border="2px">
   <tr>
     <th>Name</th>
     <th>Class</th>
     <th>Section</th>
     <th>School</th>
     <th>Place</th>
   
   </tr>
  
   {data.map((x)=>{
     return <tr>
       <th>{x.name}</th>
     <th>{x.class}</th>
     <th>{x.sec}</th>
     <th>{x.school}</th>
     <th>{x.place}</th>
     </tr>
   })}
 </table>
     </div>
   )
}
export default Std