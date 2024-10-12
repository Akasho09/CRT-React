import {atom, selector} from 'recoil'
export const countatom = atom({
    key : "countatom" ,
    default  : 0
})

export const divide3 = selector({
    key : "divide3" ,
    get : ({get} ) => {
   const count = get(countatom) ;
   return count%3==0;
    }
})