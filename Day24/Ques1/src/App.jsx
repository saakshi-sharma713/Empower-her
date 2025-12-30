import React from 'react'
import { useState } from 'react';
import Loader from './Components/Loader';

import { Suspense } from 'react';
import { lazy } from 'react';
const Card = lazy(()=> import("./Components/Card"))
const App = () => {
  const [count,setCount] = useState(0);
  return (
    <div className='container'>
      <h1>Counter : {count}</h1>
      <button onClick={()=> setCount(count+1)}>Increement</button>
      <Suspense fallback={<Loader/>}>
      <Card/>
      </Suspense>
    </div>
  )
}

export default App
