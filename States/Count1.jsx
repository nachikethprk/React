import React,{Component} from "react";
import './count1.css'

export default class Count1 extends Component
{
    constructor()
    {
        super()
        {
            this.state={count:0}
        }
    }

     handleincrement=()=>{
        this.setState({count:this.state.count+1})
    }

    handledecrement=()=>{
        this.setState({count:this.state.count-1})
    }

    handlereset=()=>{
        this.setState({count:0})
    }

    render()
    {
        return(
            <div className="main">
               <center> <h1>{this.state.count}</h1></center>
                <div className="sub">
                    <button onClick={this.handleincrement} id="a">+ increment</button>
                    <button onClick={this.handledecrement} id="a">- decrement</button>
                    <button onClick={this.handlereset} id="a">Reset</button>
                </div>
            </div>
        )
    }
}