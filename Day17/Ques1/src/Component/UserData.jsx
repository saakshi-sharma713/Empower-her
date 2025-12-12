import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const UserData = () => {
     const [data,setData] = useState([]);
     const [status,setStatus] = useState(false);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((res)=>
            res.json()
        ).then((data)=>{
             setData(data) ;
               setStatus(true);
        }
             
        )
      
    })
  return (
    <div>
      {status ? <div>
        <h1>{`UserName: ${data.name}`}</h1>  
        <h1>{`Email :${data.email}`}</h1>
        <h1>{`Phone: ${data.phone}`}</h1>
      
        </div>
        : <h1>{`Loading....`}</h1>}
    </div>
  )
}

export default UserData
