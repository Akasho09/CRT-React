// In this assignment, you will create a component that renders a large list of sentences and includes an input field for filtering these items. 
// The goal is to use useMemo to optimize the filtering process, ensuring the list is only re-calculated when necessary (e.g., when the filter criteria changes).
// You will learn something new here, specifically how you have to pass more than one value in the dependency array

import { useMemo, useState } from "react"


const vals = ["hi", "my", "name", "is", "akash", "ahmad", "and", "malik"];
let Allwords = [];

for (let i = 0; i < 100; i++) {
    let s = "";
    for (let j = 0; j < vals.length; j++) {
        s += (vals[Math.floor(vals.length * Math.random())]);
        if (j !== vals.length - 1) {
            s += " ";  // Add space only between words, not at the end
        }
    }
    Allwords.push(s);
}

export function Assig2 () {
const [inputvalue , setinputvalue]= useState("")
const [sentences , setSentences] =useState(Allwords)

const filteredSentences = useMemo(() => {
    const result = sentences.filter((a)=>{
        return a.includes(inputvalue)
    });
    return result;
}, [inputvalue, sentences]);



    return <div style={{
        border : "2px solid black",
        padding : "20px",
        margin : "20px"
    }}>
      <input type="text" onChange={(e)=>{
        setinputvalue(e.target.value)
    }} placeholder="Enter filter word"/> 
 { filteredSentences.map((a,index)=>{
    return <h6 key = {index} >{a}</h6>
 })}
    </div>
}