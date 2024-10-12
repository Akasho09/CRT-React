// Using Recoil
import './App.css'
import { useMemo } from 'react'
import { useRecoilState, useRecoilValue , RecoilRoot, useSetRecoilState} from 'recoil'
import {countatom} from '../store/atoms/count'
import { divide3 } from '../store/atoms/count'
function App() {
  return (
<>
<RecoilRoot>
<Counter/>
</RecoilRoot>
</>
  )
}

function Counter () {
  console.log("Counter- Rerendered")
  return <>
  <CountRenderer></CountRenderer>
  <Buttons ></Buttons>
  <Even></Even>
  </>
}

function CountRenderer() {
  console.log("CountRenderer- Rerendered")
  const count = useRecoilValue(countatom)
  return <>
  <h3>{count}</h3>
  </>
}

function Buttons() {
  console.log("Buttons- Rerendered")
  const setCount = useSetRecoilState(countatom)
  return <>
    <button onClick={()=>{ setCount(c=> c+1)}} >Increment</button>
    <button onClick={()=>{ setCount(c=> c-1)}}>Decrement</button>
    </>
}

function Even() {
  console.log("3 divide rerendered")
  // const c = useRecoilValue(countatom);
  // // Runs only if count changes 
  // const p = c%3;
  // const t =useMemo(()=>{
  // return c%3==0
  // },[p])
  
  // ReRenders only if count%3 changes 
  const t = useRecoilValue(divide3);
  return <div>
    {t ? "3 divide " : null }
  </div>

}



// import { useCallback, useState } from 'react'
// import './App.css'
// // import { CountContext } from './count'
// import { createContext, useContext } from 'react'
// const CountContext = createContext (0);
// function App() {

//   const [count, setCount] = useState(0)

//   return (
// <>
// <CountContext.Provider value={count} >
// <Counter setCount={setCount}></Counter>
// </CountContext.Provider>
// </>
//   )
// }

// function Counter ({setCount}) {
//   return <>
//   <CountRenderer></CountRenderer>
//   <Buttons setCount={setCount}></Buttons>
//   </>
// }

// function CountRenderer() {
// const count = useContext(CountContext)
//   return <>
//   <h3>{count}</h3>
//   </>
// }

// function Buttons({setCount}) {
//   const incr = useCallback(()=>{
//     setCount((c)=>{
//      return (c+1)
//     })
//   }, [])
//   return <>
//     <button onClick={(incr)} >Increment</button>
//     <button >Decrement</button>
//     </>
// }
export default App
