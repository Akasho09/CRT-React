// Create a counter component with increment and decrement functions. 
// Pass these functions to a child component which has buttons to perform the increment and decrement actions. 
// Use useCallback to ensure that these functions are not recreated on every render.

import { useEffect, useState ,memo, useCallback } from "react"

export function Callback1 () {
    const [count ,setcount] =useState(0)
    const handleinc= useCallback(()=>{
        // setcount(count+1)
        // without count as a dependency 
    setcount(function(currentCount){
            return (currentCount+1)
        })
    }, [])
    const handledec= useCallback(()=>{
        setcount(count=>count-1)
    }, []) 
    return <div>
    <h4>Count is {count}</h4>
    <CounterButtons  incfn={(handleinc)} decfn={(handledec)}></CounterButtons>
    </div>
}

const CounterButtons= memo (function({incfn,decfn}) {
return <>
        <button onClick={incfn}>Increment</button>
        <button onClick={decfn}>Decrement</button>
    </>
})