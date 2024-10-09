//   // suspense API => loading of Asynshronous fn , used with lazy
import {lazy, useState ,Suspense ,useCallback , useContext } from 'react'
import {incrContext}  from './context'
import './App.css'
// // import { Dashboard } from './components/dashboard'
// // import Dashboard from React.lazy(() => './components/dashboard')
// const Dashboard = lazy (() => import('./components/dashboard'))
// import { Landing } from './components/landing'
// import { Route ,BrowserRouter, Routes , useNavigate } from 'react-router-dom'
// function App() {
//   const [count, setCount] = useState(0)
//   return (
// <BrowserRouter>
// <Topbar></Topbar> 
// <Routes>
//   <Route path="/dashboard" element = { <Suspense fallback={"LOADINGGG ......"}> <Dashboard/> </Suspense>
//   }></Route>
//   <Route path="/" element={<Landing/>}></Route>
// </Routes>
// </BrowserRouter>  
//   )
// }

// // useNavigate hook can only be used inside BrowserRouter
// function Topbar () {
//   const navigate = useNavigate();
//   return ( <div>
// <div style={{background: "black" , color: "white" , padding: "20px"}}>This is the Topbar</div>
//   <button onClick={() =>{
//     // window.location.href ='/dashboard'; // not client side routing , equivalent to sending new reques to http://localhost:5173/dashboard
//     navigate ("/dashboard")
//   }}  style={{
//     padding : "5px" ,
//     margin : "5px"
//   }}>Dashboard</button>
//   <button onClick={()=>{
//     // window.location.href = "/ "
//     navigate ("/")
//   }}  style={{
//     padding : "5px",
//     margin : "5px"
//   }} >Landing</button>

//   </div>
//   )
// }


function App () {
  const [count , setcount] = useState(0);

  // const incr = useCallback(()=>{
  //   setcount((c)=>{
  //    return (c+1)
  //   })
  // }, [])
  const decr = useCallback(()=>{
    setcount((c)=>{
     return (c-1)
    })
  }, [])

return (
  <div>
    <incrContext.Provider value = { useCallback(()=>{
    setcount((c)=>{
     return (c+1)
    })
  }, [])}>
<Count count ={count} incr={incr} decr={decr}></Count>
    </incrContext.Provider>
{/* // to pass inr ,decr to Buttons they have to go through Count */}

  </div>
)

}

function Count ({count , incr , decr}) {

return <>
<h5>Count is {count}</h5>
<Buttons decr= {decr}></Buttons>
</>
}

function Buttons ({decr}) {
  const incr = useContext(incrContext)
return <>
<button onClick={(incr)}>Incremet</button>
<button onClick={(decr)}>Derement</button>
</>
}

export default App


// const [count, setCount] = usestate(0);
// // wrap anyone that wants to use the teleported value inside a provider
// return ( <div>
// <CountContext.Provider value={count}>
// <Count setCount={setCount} />
// </CountContext. Provider>
// </div>
// function Count ({setCount)) {
// return (
//   <div>
// <CountRenderer />
// <Buttons setCount={setCount} />
// </div>
// )
// function CountRenderer {
// const count = useContext (CountContext);
// return <div> {count)
// </div>
// function Buttons ({setCount)) {
// const count = useContext||CountContext:
// return
// ‹div>
// ‹button onClick={() = {
// setCount (count + 1)
// 7>Increase</button>
// <but ton
// setCount (count - 1)
// F>Decrease‹/button>
// </div> 

// }
// }}}}}
// export default App