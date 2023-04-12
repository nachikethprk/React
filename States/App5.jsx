import React from 'react'
import {Component} from "react"
import JSON from "./User.json"
import User from './User.jsx'

class App5 extends Component
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
                <User data={this.state.json}/>
            </div>
        )
    }
}

export default App5