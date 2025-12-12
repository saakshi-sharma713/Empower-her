import React from 'react'
import { useState } from 'react';

const Calculator = () => {
    const[value1,setValue1] = useState(" ");
    const[value2,setValue2] = useState(" ");
    const[operation,setOperation]=useState(" ");
    const[result,setResult] = useState([]);
    
    const [status,setStatus] = useState(false);
    function performAction(){
        if(operation=="+"){
          setResult(prev => [...prev,`Result of ${value1} ${operation} ${value2} :${Number(value1)+Number(value2)}\n`]);
        }
        else if(operation=="-"){
             setResult(prev => [...prev,`Result of ${value1} ${operation} ${value2} :${Number(value1)-Number(value2)}\n`]);  
        }
        else{
               setResult(prev => [...prev,`Result of ${value1} ${operation} ${value2}:${Number(value1)*Number(value2)}\n`]);
        }
        setStatus(true);
    }
  return (
    <div>
      <input type="number" value={value1} onChange={(e)=>{setValue1(e.target.value)}}></input>
      <input type="number" value={value2} onChange={(e)=>{setValue2(e.target.value)}}></input>
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option></option>
        <option value="+">* Add</option>
        <option value="-"> * Subtract</option>
        <option value="*"> * Multiply</option>
      </select>
      <button onClick={()=> performAction()}>Perform Action</button>

      <div className="result">{status ? result.map((val,idx)=>{
        return <div key={idx}>
            {val}
            </div>
      })   : " "}<br/></div>
    </div>
  )
}

export default Calculator
