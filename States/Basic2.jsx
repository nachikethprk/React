import React from "react"
import {Component} from "react"

class Basic2 extends Component
{
    constructor()
    {
        super()
        this.state={sub:"java"}
    }

    render()
    {
        return(
          <h1>{this.state.sub}</h1> 
        )
    }
}
export default Basic2