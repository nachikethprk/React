import React from 'react'
import {Component} from "react"
import JSON from "./Std.json"
import Std from './Std.jsx';

class Student extends Component
{
    constructor()
    {
        super()
        this.state={
            json:JSON
        }
    }
    render()
    {
        return(
            <div>
                <Std data={this.state.json}/>
            </div>
        )
    }
}

export default Student