import { useState } from 'react'
import './App.css'

// // FIRST SNIPPET => All elements are rerendered again
// function App() {
//   const [title,setTitle] =useState("This is to generate random number , initially = 3 ")
//   // Declare a state variable  "title" initialized to This is to generate random number , initially = 3 
//   function onclickfn() {
//     setTitle("Random num is " + Math.random());
//   }
  
//   return (
// <div>
// <h1> DOM MANUPILATION USING REACT </h1>
// <button onClick={onclickfn}>Click to gereate random num</button>
// <Header title={title} ></Header>
// <Header title="This needs to be constant number = 6"></Header>
// <Header title="This needs to be constant number = 6"></Header>
// <Header title="This needs to be constant number = 6"></Header>
// <Header title="This needs to be constant number = 6"></Header>

// </div>
//   )
// }

// function Header({title}) {
//   console.log("Function called")
//   return <div>
//     {title}
//   </div>
// }
// export default App


// // 2ND => only Manupilated part is rerenderd again and again
// function App() {
//   return (
// <>
// <h1> DOM MANUPILATION USING REACT </h1>
// <Headerwwithbutton></Headerwwithbutton>
// <Header title="This needs to be constant number = 6"></Header>
// <Header title="This needs to be constant number = 6"></Header>
// <Header title="This needs to be constant number = 6"></Header>
// <Header title="This needs to be constant number = 6"></Header>
// </>
//   )
// }

// function Headerwwithbutton() {
//  const [title , setTitle] = useState ("This is to generate random number , initially = 3 ") 
//   function onclickfn() {
//     setTitle("Random num is " + Math.random());
//   }
// return (
//     <>
//     <button onClick={onclickfn}>click to gereate random num</button>
//     <Header title={title}></Header>
//     </>
//   )
// }

// function Header({title}) {
//   console.log("Function called")
//   return <div>
//     {title}
//   </div>
// }


//Using React Memo  => Manuplated part and  app as a whole is rerendered again and again
import {memo} from "react";

function App() {
  const [title,setTitle] =useState("This is to generate random number , initially = 3 ")
  // Declare a state variable  "title" initialized to This is to generate random number , initially = 3 
  function onclickfn() {
    setTitle("Random num is " + Math.random());
  }
  
  return (
<div>
<h1> DOM MANUPILATION USING REACT </h1>
<button onClick={onclickfn}>Click to gereate random num</button>
<Header title={title} ></Header>
<Header title="This needs to be constant number = 6"></Header>
<Header title="This needs to be constant number = 6"></Header>
<Header title="This needs to be constant number = 6"></Header>
<Header title="This needs to be constant number = 6"></Header>

</div>
  )
}

const Header = memo(function({title}) {
  console.log("Function called")
  return <div>
    {title}
  </div>
}
)



export default App