// // usestate is a hook
// import {useState} from "react" ;


// function App() {
//   const [count ,setCount ] = useState(0);
//   // console.log(count)
//   // console.log(setCount)

//  function onclickfn() {
// // state.count++
// setCount(count+1);
// // console.log(count)
// } 
//   return (
//     <>
//       <div>
//  <button onClick={onclickfn}> Counter {count}</button>
//     </div>
//     </>
//   )
// }

// export default App


// If you meant to render a React component, start its name with an uppercase letter.
import {useState} from "react";
function App () {
const [count , setCount]=useState(0);
return (
  <div>
    <CustomButton count={count} setCount ={setCount}></CustomButton>
    <CustomButton count={count + 10} setCount ={setCount}></CustomButton>
    <CustomButton count={count * 10} setCount ={setCount}></CustomButton>
     <Dummybutton > </Dummybutton>
  </div>
)

}
function Dummybutton () {
  console.log("dummy button called");
  return <button>dummy</button>
}
function CustomButton(a) {
  console.log("custom button called");

function onclickfn() {
a.setCount(a.count+2)
console.log(a.count)
  }

return <button onClick={onclickfn}>
count {a.count}
</button>
}
export default App



