import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';


function App() {
const isonline = useIsOnline();
const p =  useMousePointer ();
const t = useInterval();

if(isonline==true) return (
<div>  
  <h6>You are Online</h6> <br />
  {/* position :
  <h6>{p.x}</h6>
  <h6>{p.y}</h6> */}
  {/* <h6>Timer is {t}</h6> */}
  <SearchBar></SearchBar>
</div>
)
else return (
  <div>  
    <h6>You are Offline</h6> <br />
    {/* position :
    <h6>{p.x}</h6>
    <h6>{p.y}</h6> */}
  </div>
  )
}



function SearchBar () {
const [inputvalue , setinputvalue ] = useState ("");
const debouncevalue = useDebounce(inputvalue , 500) // 500ms debounce time 

// we use debouncevalue to in our componrnt logic to trigger a API call 

  return (
    <div>
      <input type="text" onChange={(e)=>{
      setinputvalue(e.target.value)
      }}  placeholder='Search...'/>  
      <h6>Debounced value is {debouncevalue}</h6>
    </div>
  )
}

function useDebounce ( value , n) {
  const [v , setv ] = useState("") 
  
  useEffect(()=>{
    let t= setTimeout(()=>{
      setv(value)
    },n)
    return ()=>{
      clearTimeout(t)
    }
  }, [value])
  
  return v
  }



function useInterval () {
  const [time , settime ] = useState(0);

useEffect(()=>{
  const value = setInterval(()=>{
    settime(time+1)
  }, 1000)
  // close the coonection after starting the timer 
  // if clearinterval isnt written 
  // timer doesnt run properly 
return ()=>{
  clearInterval(value)
}
},[time])

return time

}


function useMousePointer() {
const [position , setposition] = useState({
  x: 0,
  y: 0
})
const handlemove = (e)=>{
  setposition({
    x: e.clientX,
    y: e.clientY
  })
}
useEffect(()=>{
window.addEventListener('mousemove' , handlemove)
return ()=>{
  window.removeEventListener('mousemove' , handlemove)
}
},[])

return position

}


// set no throtting in netwoks => offline ????
function useIsOnline() {
const [y , sety] = useState(window.navigator.onLine)

useEffect(()=>{
  // setTimeout(()=>{
  //   if(window.navigator.onLine===true) sety(true);
  // },1000)

  const handleonline = ()=>{
    console.log(" u r online " )
    sety(true);
  } 
  const handleoffline = ()=>{
    console.log(" u r offline " )
    sety(false);
  }
  window.addEventListener('online' , handleonline)
  window.addEventListener('offline' , handleoffline)

return ()=>{
  window.removeEventListener("online" , handleonline)
  window.removeEventListener("offline" , handleoffline)
}

}, [] )

return y

}





// import useSWR from "swr"
// useSWR hook used to fetch data , error and isLoading for a fetch call
// function App() {

//   return (
//     <>
// <Mycomponent></Mycomponent>
//     </>
//   )
// }

// const cb =  async function (url) {
// const data = await fetch (url) ;
// const json = await data.json() ;
// return json ;
// }


// function Mycomponent () {

//   const {data , error , isLoading } = useSWR( "https://catfact.ninja/fact" , cb );

// if (error) return (
//   <div>Failed to load url</div>
// )
// else if (isLoading) {
//   return (
//     <div>
//       Loading ....
//     </div>
//   )
// }
// else {
//   return (
//     <div>
//       {data.fact}
//     </div>
//   )
// }
// }


// function App() {
//   const {obj , loading } = useObjects(5); //custom hook
//  if(loading ) {
//   return (
//     <div>
//       Loading ....
//     </div>
//   )
//  }
//  else {
//   return (
//     <div>
//       {obj.fact}
//     </div>
//   )
//  }
// }

export default App;

// function useObjects(n) {
//   const [obj, setObj] = useState([{
//     fact : "facts"
//   }]);
//   const [loading , setloading ] = useState(true);

//       useEffect(() => {

//    let fetchdata = ()=>{
//     axios.get(`https://catfact.ninja/fact`)
//    .then((res) => {
//      console.log(res)
//      setObj(res.data);
//      setloading(false);
//    })
//    .catch((error) => {
//      console.error('Error fetching data:', error);
//    });
//    }

//    fetchdata() ;
//    let value = setInterval(fetchdata , n*1000)

//           return ()=>{
//             clearInterval(value) // clearInterval is called on component unmount, which ensures the interval is cleared when the component using this hook is removed from the DOM.
//           }

//       }, [n]); // n as a dependency 


//   return {obj , loading};
// }



// function App() {
//   const [render , setrender] = useState(true);
//   // Life cycle events eg
//   useEffect(()=>{
  
//     setInterval(()=>{
//       setrender((r)=>!r);
//     } , 3000) ;
  
//   },[])
//     return (
//   <>
  
//   {render ? <Mycomponent/> : <div/>}
//   </>
//     )
//   }
  
//   function Mycomponent() {
//   useEffect(()=>{
//   console.log("Component Mounted")
  
//   // gets called when component is unmounted
//   return ()=>{
//   console.log("Component Unmounted")
//   }
//   }, [] )
  
//     return (
//       <>
//       Component
//       </>
//     )
//   }