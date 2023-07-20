import React,{useState} from 'react';
import './App.css';
function App() {
const[count,setCount]=useState(0);
const[count1,setCount1]=useState(0);
const useIncrement=(addAmount)=>{

  setCount(result=>result+addAmount);
}
const useIncrement1=(addAmount)=>{
  setCount1(result=>result+addAmount);
}

  return (
    <>
    <p>Count1: {count}</p>
     <button onClick={
     useIncrement.bind(null,1)
     }>Add1</button><br/>
    <p>Count2: {count1}</p>
     <button onClick={
      useIncrement1.bind(null,2)
     }>Add2</button> 
</>
  );
}

export default App;
