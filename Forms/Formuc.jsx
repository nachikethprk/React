import React, { Component,createRef } from 'react'

 class Formuc extends Component {
    constructor(){
        super()
        {
            this.user=createRef()
            this.pwd=createRef()
        }
    let handlesubmit=(e)=>{
            e.preventDefault()
            let username=this.user.current.value
            let password=this.pwd.current.value
            console.log({username,password});
        }
    }
  render() {
    return (
      <div>
          <h1>Uncontrolled form by class based component </h1>
         <form action="" onSubmit={this.handlesubmit}>
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

export default Formuc