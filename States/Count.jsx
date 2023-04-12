import React,{Component} from "react";

export default class Count extends Component{
constructor()
{
    super()
    this.state={
        username:"hari",
        count:0
    }
}
handlechange=()=>{
    this.setState({username:"nisha"})
}

handlenumberchange=()=>{
    this.setState({count:1})
}


render(){
    return(
        <div>
            <h1>{this.state.username}</h1>
            <h1>{this.state.count}</h1>
            <button onClick={this.handlechange}>click on change</button>
            <button onClick={this.handlenumberchange}>Change number</button>
        </div>
    )
}

}