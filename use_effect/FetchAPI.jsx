import React,{useState,useEffect} from 'react'

const FetchAPI = () => {
    let [userdata, setuserdata]=useState([])
    useEffect(()=>{
        window.fetch("https://api.github.com/users")
        .then((x)=>x.json())
        .then((data)=>setuserdata(data))
        .catch((err)=>err)
    },[])
  return (
    <div>
        {userdata.map((x,index)=>{
            console.log(index);
            return(
                <>
                <li key={index}>{x.login}</li>
                <li key={index}>{x.id}</li>
                <li key={index}>{x.node_id}</li>
                <li key={index}>{"x.avatar_url"}</li>
                <li key={index}>{x.html_url}</li>
                <li key={index}>{x.followers_url}</li>
                <li key={index}>{x.received_events_url}</li>
                </>
            )
        })}
    </div>
  )
}

export default FetchAPI