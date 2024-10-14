import {atom , selector} from 'recoil' ;
export const networkatom = atom({
key : "networkatom" ,
default : 102
})
export const jobatom = atom({
key : "jobatom" ,
default : 0
    })

export const messageatom = atom({
key : "messageatom" ,
 default : 0
        })

export const notifiactionsatom = atom({
   key : "notifiactionsatom" ,
  default : 56
})

export const totalnotifiselector = selector({
  key : "totalnotifiselector" ,
  get : ({get})=>{
    const n = get(networkatom);
    const j = get(jobatom);
    const m = get(messageatom);
    const no = get(notifiactionsatom);
  return n+j+m+no ;
  }
})