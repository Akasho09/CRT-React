import {atom, selector , atomFamily , selectorFamily} from 'recoil'
import jsondata from '../../src/people_data.json'
// export const countatom = atom({
//     key : "countatom" ,
//     default  : 0
// })

// export const divide3 = selector({
//     key : "divide3" ,
//     get : ({get} ) => {
//    const count = get(countatom) ;
//    return count%3==0;
//     }
// })

export const inputvalue = atom({
    key :"inputvalue" ,
    default : 0
})

export const Peopledata = selector({
    key: 'Peopledata',
    get:  ({ get }) => {
        const age = get(inputvalue); // Get the input value from the atom
        const filteredData = jsondata.filter((p) => p.age > age); // Filter based on input age
  return filteredData ;
}
})


export const Randomperson = atomFamily({
    key : "Randomperson",
    default: (id) => {
        return jsondata.find((x) => x.id===id)
    }
 })

 // getting atom remotely using fetch 
 export const notifications = atom({
    key: "networkAtom",
    // defaultor is a async function to fetch notifications
    default: selector({
        key : "networkselector" ,
        get : async  ()=>{
         await new promise (setTimeout(),2000)   ;
        const res = await axios.get("https://sum-server.100xdevs.com/notifications");
        return res.data ;
        }
    })
});

export const todosatomfamily = atomFamily({
key : "todosatomfamily",
default : selectorFamily({
    key: "todoselectorfamily" ,
    get : function (id){
        // 2 functions 
    return async function ({get}) {
    const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`) 
    return res.data.todo
}
}
})
})

// export const todosAtomFamily = atomFamily({
//     key: 'todosAtomFamily',
//     default: selectorFamily({
//       key: "todoSelectorFamily",
//       get: (id) => async ({get}) => {
//         const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
//         return res.data.todo;
//       },
//     })
//   });