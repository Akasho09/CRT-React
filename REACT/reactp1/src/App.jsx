import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <button onClick={() => {
          setCount(2)
          setCount(3) // 3 ie second 
        }
        }>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
