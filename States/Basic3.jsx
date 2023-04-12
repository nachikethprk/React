import React from "react"
import {Component} from "react"

class Basic3 extends Component
{
    state={
        name:"ramesh",
        skills:["hw","cw","aw"],
        age:25,
        subjects:["english","kannada","maths","Science","Social"],
        pass:"true"
    }
    render()
    {
        return(
            <>
           <h1> {this.state.name}</h1>
            <ul>
                {this.state.skills.map((x)=>{    return <li>{x}</li>    })}
            </ul>
            <h1> {this.state.age}</h1>
            <ul>
                {this.state.subjects.map((x)=>{return <li>{x}</li> })}
            </ul>
            <h1>{this.state.pass}</h1>
            </>
        )
    }
}
export default Basic3
