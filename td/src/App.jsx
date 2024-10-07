// // Lets create a simple todo app that renders 3 todos
// // Create a Todo component that accepts title, description as input
// // Initialise a state array that has 3 todos
// // Iterate over the array to render all the TODOs
// // A button in the top level App component to add a new TODO
import { useState } from 'react'
import {useEffect} from 'react'
// import './App.css'

// let count =4;

// function App() {
// const [todos , settodos] =useState(
//   [
//     {
//       id:1,
//       title: "Todo 1",
//       description : "Desc 1"
//     },
//     {
//       id:2,
//       title: "Todo 2",
//       description : "Desc 2"
//     }, 
//     {
//       id:3,
//       title: "Todo 3",
//       description : "Desc 3"
//     }
//   ]
// )

// function addtodo() {
//   settodos ([...todos , {
//       id:count++,
//       title: `Todo ${count-1}`,
//       description : `Desc ${count-1}`
//   }])
// }

//   return (
//    <>
// <button onClick={addtodo}>Add new Todo</button>
// {
// todos.map((todo)=>{
// return <Todo key={todo.id} title = {todo.title} description={todo.description}></Todo>
// }
// )}
//    </>
//   )
// }

// //Todo component
// function Todo ({title,description}) {
// return ( <>
//   <h1>{title}</h1>
//   <h3>{description}</h3>
//   </>
// )
// }


// export default App


// // create a div which has a border (hint: the way to create a border is border: "2px solid black")
// // and inside the div, renders the prop
// function App() {

//   return <>
//   <Cardwrapper innerComponent ={<Textcomponent1/>}></Cardwrapper>
//   <Cardwrapper innerComponent ={<Textcomponent2/>}></Cardwrapper>
//   <Cardwrapper innerComponent ={<Textcomponent3/>}></Cardwrapper>

//   </>
// }

// function Cardwrapper({innerComponent}) {
//   return <div style={{
//     border: " 2px solid black ",
//     padding : "20px"
//   }}>
// {innerComponent}
//   </div>
// }

// function Textcomponent1() {
//   return <h1>T1</h1>
// }
// function Textcomponent2() {
//   return <h1>T2</h1>
// }
// function Textcomponent3() {
//   return <h1>T3</h1>

//using children
// return <>
// <Cardwrapper>
// Text 1<Cardwrapper>Text 1</Cardwrapper>Text 1
//   </Cardwrapper>
// <Cardwrapper>Text 2</Cardwrapper>
// <Cardwrapper>Text 3</Cardwrapper>

// </>


// function Cardwrapper({children}) {
//   return <div style={{
//     border: " 2px solid black ",
//     padding : "20px"
//   }}>
// {children}
//   </div>
// }


// Todos -- infinite requests solved
function App() {
const [todos,settodos] = useState([]) //[] initilize todos with empty array
useEffect(()=>{
  fetch ("http://localhost:3000/todo")
   .then( async (res)=>{
   const json=await res.json();
   settodos(json.data)
   })
}, [] ) // dependency = [] => only gets called first time mounted data then never

return <div>
{
todos.map(todo=> <Todo key={todos.key} Title = {todo.title} Description= {todo.Description}> </Todo>
)}
</div>
function Todo ({Title,Description}) {
  return <>
  <h1>{Title}</h1>
  <h2>{Description}</h2>
  </>
} 
}

export default App;
