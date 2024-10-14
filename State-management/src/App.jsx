// Using Recoil
import './App.css'
// import { useMemo } from 'react'
import { useRecoilValue , RecoilRoot, useSetRecoilState} from 'recoil'
// import {countatom} from '../store/atoms/count'
// import { divide3 } from '../store/atoms/count'
import { Peopledata , Randomperson} from '../store/atoms/count'
import { inputvalue } from '../store/atoms/count'
function App() {
  // const people_data = useRecoilValue(Peopledata)
  return (
<>
<RecoilRoot>
<Data></Data>
<Randompersondiv id={Math.floor(Math.random()*1000)}></Randompersondiv>
</RecoilRoot>


 {/* <RecoilRoot>
<Counter/>
</RecoilRoot> */}
</>
  )
}


function Randompersondiv({id}) {
const rp = useRecoilValue(Randomperson(id)) ;
  return <div>  <h1>Random person is : {rp.first_name}</h1></div>
}

function Data () {
  const setinputvalue = useSetRecoilState(inputvalue) 
  const peopledata = useRecoilValue(Peopledata)
  return <>
  <input type="text" placeholder='Enter filter age ' onChange={(e)=>{
    setinputvalue(e.target.value)
  }} />
  <div> {peopledata.map((p, index) => {
    return <div key = {index}> <b >{p.first_name} {p.last_name}  {p.city} {p.age} {p.email}</b> <br /></div>
    }
  )}
  </div>

  </>
}

// useRecoilStateLoadable
// const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));
// if (todo.state === "loading") {
//    return <div>loading</div>
// }

// return (
//  <>
//    {todo.contents.title}
//    {todo.contents.description}
//    <br />
//  </>
// )


// function Counter () {
//   console.log("Counter- Rerendered")
//   return  (
//   <>
//   <CountRenderer></CountRenderer>
//   <Buttons ></Buttons>
//   <Even></Even> 
//   </>
//   )
// }

// function CountRenderer() {
//   console.log("CountRenderer- Rerendered")
//   const count = useRecoilValue(countatom)
//   // const inputvalue2 = useRecoilValue(inputvalue)
//   return <>
//   <h3>{count}</h3>
//   {/* <div>{inputvalue2}</div> */}
//   </>
// }

// function Buttons() {
//   console.log("Buttons- Rerendered")
//   const setCount = useSetRecoilState(countatom)
//   return <>
//     <button onClick={()=>{ setCount(c=> c+1)}} >Increment</button>
//     <button onClick={()=>{ setCount(c=> c-1)}}>Decrement</button>
//     </>
// }

// function Even() {
//   console.log("3 divide rerendered")
//   // const c = useRecoilValue(countatom);
//   // // Runs only if count changes 
//   // const p = c%3;
//   // const t =useMemo(()=>{
//   // return c%3==0
//   // },[p])
  
//   // ReRenders only if count%3 changes 
//   const t = useRecoilValue(divide3);
//   return <div>
//     {t ? "3 divide " : null }
//   </div>

// }



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
