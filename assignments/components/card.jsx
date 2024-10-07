import { useState } from 'react'

export function Assig1() {
  const [interests,setinetrests]= useState(
    [ "intrest1" , "intrest2" ]
  )
  const [fullname,setfullname] = useState("Akash")
  const [address, setaddress] = useState("Delhi")
  const [c, setc] = useState(1)
  
  return (
<div style={{
    padding: "20px",
    margin : "20px",
    border : "2px solid black"
}}>
    <Card key={c} name = {fullname} address={address} interests={interests} ></Card>

<Inputcarddetails></Inputcarddetails>
</div>
)
}

function Card({name,address,interests}) {
  console.log("card called")
  const i = interests.map((intr, index) => ( // index as key
    <li key={index}>
      {intr}
    </li>
  ));

  return <div>
    <h1>{name}</h1>
    <h5>{address}</h5>
    <h3>
    {i}
    </h3>
    <button>Linkedin</button>
    <button>Twitter</button>
  </div>
}

function Inputcarddetails(){

  return <form action="submit" style={{
    padding: "20px",
    margin : "20px"
  }} >Input Card Details <br />
    Fullname  : <input type="text" /><br />
    Address   : <input type="text" /><br />
  </form>
}