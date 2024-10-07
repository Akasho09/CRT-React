import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import {useMemo} from "react"

  function App() {
//     const [todos,settodos] = useState([]) //[] initilize todos with empty array
//     useEffect(()=>{
//       axios.get ("http://localhost:3000/todo")
//        .then( async (res)=>{
//        console.log(res)
//        settodos(res.data.data) //data of axios , data of todos as a whole named
//        })
//     }, [] )

//   return (
//     <>
//       {/* Map through todos and render each Todo component */}
//       {todos.map((todo) => (
//         <Todo key={todo.id} title={todo.title} description={todo.Description} />
//       ))}
//     </>
//   );
// }

// // Corrected Todo component
// function Todo({ title, description }) {
//   return (
//     <ul>
//       <li>Title: {title}</li>
//       <li>Description: {description}</li>
//     </ul>
//   );
const [count , setcount] = useState (0) ;
const [inputvalue, setinputvalue] = useState(1)
// const [finalvalue, setfinalvalue] =useState(1)
// useEffect(()=>{
//   let n=parseInt(inputvalue);
//   setfinalvalue((n*n + n) /2)
// } , [inputvalue])


// reduces 1 render of extra state variable change 
let finalvalue = useMemo(()=>{
  let c=0;
  let n=parseInt(inputvalue);
  c = (n*n + n) /2;
  return c
}, [inputvalue])

return (  
<>
<input type="number" onChange={(e)=>{
  setinputvalue(e.target.value)
}} placeholder='Enter num to get sum upto that num '/>
<div><h5>Sum upto {inputvalue} is {finalvalue}</h5></div>
<button onClick={()=>{
  setcount(count+1)
}} >Counter {count} </button>
</>
)

}

export default App;
