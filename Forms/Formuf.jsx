import React,{useRef} from 'react'

const Formuf=()=> {
    let user=useRef()
    let pwd=useRef()

let handlesubmit=(e)=>{
    e.preventDefault()
    let username=user.current.value
    let password=pwd.current.value
    console.log({username,password});
}
  return (
    <div>
          <h1>Uncontrolled form by function based component </h1>
         <form action="" onSubmit={handlesubmit}>
            <label htmlFor='username'>Username</label>
            <br />
            <input type="text" id='Username' ref={user} />
            <br />
            <label htmlFor='password'>Password</label>
            <br />
            <input type="text" id='Password' ref={pwd}/>
            <br />
            <button onClick={(e)=>{
                e.preventDefault()
                let Username= document.getElementById("Username").value
                let Password = document.getElementById("Password").value
                console.log({Username, Password});
            }   

            }   >Submit</button>

        </form>
    </div>
  )
}

export default Formuf