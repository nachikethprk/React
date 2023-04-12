import React from 'react'
import { Component } from 'react'


class Signup extends Component{

  render()
  {
    return(
      <div>
      <h1>SIGNUP PAGE</h1>
      <form action="">
        <input type="text" />
        <input type="password" />
        <button onClick={(e)=>{
          e.preventDefault()
          window.location.assign('/login')
        }}>SUBMIT</button>
      </form>
    </div>
    )
  }
}


export default Signup
