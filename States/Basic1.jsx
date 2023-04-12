import React from "react"
import {Component} from "react"

class Basic1 extends Component
{
    state={name:"lokesh"}
    render()
    {
        return(
            <h1>{this.state.name}</h1>
            
        )
    }
   
}
export default Basic1