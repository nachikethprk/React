import React, { Component } from 'react'
 export class Formc extends Component {
  render() {
    return (
      <div>
         <h1>class based component form</h1>
        <form action="">
            <label>Username</label>

            <br />
            <input type="text" id='Username' />
            <br />
            <label>Password</label>
            <br />
            <input type="text" id='Password' />
            <br />
            <button onClick={(e)=>{
                e.preventDefault()
                let Username= document.getElementById("Username").value
                let Password = document.getElementById("Password").value
                console.log({Username, Password});
            }   

            }   >Submit</button>

        </form>
      </div>
    )
  }
}
export default Formc;