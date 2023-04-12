import React, { useState } from 'react'

const Formcf = () => {
  let [user , setUser] = useState("")
  let [pass, setPass] = useState("")

  let handleSubmit = (e)=>{
  e.preventDefault()
  console.log({user , pass});
  }
  return (
    <div>
       <h1>controlled form by function based component </h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <br />
        <input type="text" id="username" onChange={(e)=>{
          setUser(e.target.value)
        }}/>
        <br />
        <label htmlFor="password">Passoword</label>
        <br />
        <input type="password" id='password'onChange={(e)=>{
          setPass(e.target.value)
        }} />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Formcf