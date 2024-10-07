import {createContext ,useCallback} from 'react';

const incr = useCallback(()=>{
    setcount((c)=>{
     return (c+1)
    })
  }, [])

export const incrContext = createContext(incr)