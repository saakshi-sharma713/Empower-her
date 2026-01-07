import React, { Children, createContext } from 'react'
export const AuthContext = createContext();
const AuthContextt = ({children}) => {
    function signUp(email,password){
        if(!email||!password){
             return false;
        }
           localStorage.setItem("auth",JSON.stringify({email,password}));
       return true;
    }
    function login(email,password){
        const StoredData = JSON.parse(localStorage.getItem("auth"));
        if(StoredData.email==email && StoredData.password == password){
             return true;
        }
        return false;
    }
    function logout(){
        localStorage.clear();
    }
  return (
    <div>
      <AuthContext.Provider value={{login,signUp,logout}}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthContextt
