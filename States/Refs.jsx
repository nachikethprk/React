import React from "react";

import { Component,createRef } from "react";

class Refs extends Component{
    constructor()
    {
        super()
        this.state={name:"Hello world"}
        this.href.createRef()
    }

     DidMount()
    {
        let h1=document.querySelector("h1")
        console.log(h1,"DOMWAY");

    }
    render()
    {
        return(
            <>
            <h1 ref={this.href}>{this.state.name}</h1>
            </>
        )
    }
}
export default Refs