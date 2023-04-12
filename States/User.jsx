import React from 'react'

const User = (props) => {
  console.log(props);
   let data =props.data
  return (
    <div>
<table border="2px">
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Gender</th>
    <th>Number</th>
    <th>DOB</th>
    <th>Photo</th>
  </tr>
 
  {data.map((x)=>{
    return <tr>
       <th>{x.name}</th>
    <th>{x.age}</th>
    <th>{x.gender}</th>
    <th>{x.number}</th>
    <th>{x.dob}</th>
    <th><img src={x.photo} alt="" height="50px" width="50px" /></th>
    </tr>
  })}
</table>
    </div>
  )
}

export default User