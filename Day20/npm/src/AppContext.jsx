import React, { createContext } from 'react'
export const AppContext = createContext();
const Context = ({children}) => {
    const a="apple";
    const b="banana";
    const c="cherry";
    const d="orange";
    const e="guava";
    const f="strawberry";
  return (
    <AppContext.Provider value={{a,b,c,d,e,f}}>
        {children}
    </AppContext.Provider>
  )
}

export default Context;
