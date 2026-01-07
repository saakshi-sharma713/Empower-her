import React from 'react'

const Route1 = ({children}) => {
    const data = localStorage.getItem("auth");

    if(!data){
        <Navigate to="/Login" />
    }
  return (
    <div>
      {children}
    </div>
  )
}

export default Route1
