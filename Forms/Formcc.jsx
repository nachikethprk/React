import React, { Component } from 'react';

class Formcc extends Component {
    constructor(){
        super()
        this.state={
            username:"",
            password:""
        }
    }
    // handlesubmit=(e)=>{
    //     e.preventDefault()
    //     console.log(this.state.username);
    //     console.log(this.state.password);
    // }
    render() {
        return (
            <div>
                 <h1>controlled form by class based component </h1>
                 <form action="">
        <label htmlFor="username">Username</label>
        <br />
        <input type="text" id="username" onChange={
            (e)=>{
          this.setState({username:e.target.value})
        }}/>
        <br />
        <label htmlFor="password">Passoword</label>
        <br />
        <input type="password" id='password'onChange={
            (e)=>{
          this.setState({password:e.target.value})
        }} />
        <br />
        <button onClick={(e)=>{
           e.preventDefault()
           console.log(username);
           console.log(password);
        }}>Submit</button>
      </form>
            </div>
        );
    }
}

export default Formcc;
