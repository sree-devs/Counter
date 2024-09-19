import React,{useState} from 'react'

export default function Counter() {
const App = ()=>{}
   const[counter,setCounter] = useState(0);

const handleClick1 =()=>{
    setCounter(counter +1);
}



const handleClick2 =()=>{
    setCounter(counter -1);


}



  return (
    <>
    <h1>Counter App</h1>
    <div>
        {counter}
    </div>
    <button onClick={handleClick1}> increment</button>
    <button onClick={handleClick2}>decrement</button>
    
    
    
    
    
    </>
  )
   
  }


