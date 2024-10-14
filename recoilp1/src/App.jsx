import './App.css'
import {useRecoilState , useRecoilValue , RecoilRoot} from 'recoil'
import {networkatom , jobatom , messageatom , notifiactionsatom , totalnotifiselector} from './atoms'

function App() {

  return <>
  <RecoilRoot>
    <Topbar>
    </Topbar>   
  
  </RecoilRoot>
  
  </>
}

function Topbar () {
  const [Network, setNetwork] = useRecoilState(networkatom)
  const [Jobs, setJobs] = useRecoilState(jobatom)
  const [Messages, setMessages] = useRecoilState(messageatom)
  const [Notifi, setNotifi] = useRecoilState(notifiactionsatom)
  const totalnotifi = useRecoilValue(totalnotifiselector)
  return (
<>
<button>Home </button>
<button onClick={()=>{setNetwork(0)}}>My Network {Network > 99 ? "99+" : Network > 0 ? Network : ""}  </button>
<button onClick={()=>{setJobs(0)}}>Jobs {Jobs > 99 ? "99+" : Jobs > 0 ? Jobs : ""}</button>
<button onClick={()=>{setMessages(0)}}>Messaging {Messages > 99 ? "99+" : Messages > 0 ? Messages : ""}</button>
<button onClick={()=>{setNotifi(0)}}>Notifications {Notifi > 99 ? "99+" : Notifi > 0 ? Notifi : ""}</button>
<button>Me  {totalnotifi} </button>

</>
  )
}

export default App
