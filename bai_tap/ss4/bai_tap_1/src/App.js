import React,{useState} from 'react';

import './App.css';
function App() {
const[count,setCount]=useState(0);
const[count1,setCount1]=useState(0);
  return (


    <>
    <p>Count1: {count}</p>
     <button onClick={()=>{
      setCount((previousCount)=>previousCount+1);
     }}>Add1</button><br/>
    <p>Count2: {count1}</p>
     <button onClick={()=>{
      setCount1((previousCount)=>previousCount+2);
     }}>Add2</button>
   
</>
  );
}

export default App;
