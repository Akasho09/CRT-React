import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import useSWR from "swr"

function App() {

  return (
    <>
<Mycomponent></Mycomponent>
    </>
  )
}

const cb =  async function (url) {
const data = await fetch (url) ;
const json = await data.json() ;
return json ;
}


function Mycomponent () {

  const {data , error , isLoading } = useSWR( "https://catfact.ninja/fact" , cb );

if (error) return (
  <div>Failed to load url</div>
)
else if (isLoading) {
  return (
    <div>
      Loading ....
    </div>
  )
}
else {
  return (
    <div>
      {data.fact}
    </div>
  )
}
}




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