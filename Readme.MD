## React

"React" is a JavaScript library for building user interfaces.

React is used to build single-page applications.

React allows us to create reusable UI components.

- Basically , it calulates diff between initial & final , then updates.

  
# commands
npm create vite@latest

npm install --> installs all dependencies in p.json

cd frontend

npm run dev

npm run build

# state 
"State" is an object that holds data that can change over the lifetime of a component.

React tracks this data internally, and when the state changes, it triggers a re-render of the component.

The state is local to the component and can only be updated by that component (although state can be passed down as props to child components).

setCount (count + 1):
setCount (c => c + 1)
setCount (function(c) { return c +1 }
  

# Re-rendering in react

It happens when

A state variable that is being used inside a component changes

A parent component re-render triggers all children re-rendering.

  

# useEffect

The "useEffect" Hook allows you to perform side effects in your components. --> stops infinite rerendering

Some examples of side effects are: fetching data, directly updating the DOM, and timers.

useEffect accepts two arguments. The second argument is optional.

useEffect(<function>, <dependency>)

  

# React Memo

"Components in React are designed to re-render whenever the state or props value changes. "

Also, when a parent component re-renders, so do all of its child components. This can impact our application performance because,

even if the change is only intended to affect the parent component, all child components attached to the parent component will be re-rendered.

Ideally, child components should only re-render if their state or the props passed to them change.

React.memo() is a higher-order component (HOC) provided by React that memoizes functional components. It means that it caches the result of the component’s rendering based on its props, and re-renders only when the props have changed.

  
  

# Warning: Each child in a list should have a unique “key” prop.

Keys tell React which array item each component corresponds to, so that it can match them up later.

This becomes important if your array items can move (e.g. due to sorting), get inserted, or get deleted.

A well-chosen key helps React infer what exactly has happened, and make the correct updates to the DOM tree.

JSX elements directly inside a map() call always need keys!

  
  
#  useMemo
The React "useMemo" Hook returns a memoized value.

useMemo() is a React Hook used to memoize the result of expensive computations within functional components.

It memorizes the value returned by a provided function and re-calculates it only when the dependencies change.

  
  
#  useCallback
The React "useCallback" Hook returns a memoized callback /function.

because f1==f2 is false even if both functions are same.

  
  
# Reconciliation
React "Reconciliation" is the process through which React updates the Browser DOM.

It makes the DOM updates faster in React. It updates the virtual DOM first and then uses the diffing algorithm to make efficient and optimized updates in the Real DOM.

  
  
# useRef
The "useRef" Hook allows you to persist values between renders.

It can be used to store a mutable value that does not cause a re-render when updated.

It can be used to access a DOM element directly

const divref = useRef();
re={divref}

# Suspense and Lazy 
 is a React component used to suspend the rendering process to perform some asynchronous tasks like getting data from API or loading any other component lazily. 
 In simple words, Suspense is like waiting for something to happen, where we are not sure when it will happen. Suspense is beneficial in code splitting and data fetching processes.
- warp in Suspense 
- const Dashboard = lazy (() => import('./components/dashboard'))
<Route path="/dashboard" element = { <Suspense fallback={"LOADINGGG ......"}> <Dashboard/> </Suspense>

# Context API
Context API is used to pass global variables anywhere in the code. It helps when there is a need for sharing state between a lot of nested components. It is light in weight and easier to use, to create a context just need to call React.createContext(). No need to install other dependencies or third-party libraries like redux for state management.
1. import {createContext, useContext } from 'react';
2. const CountContext = createContext (0);
3. Wrap the part of your component tree where you want to share the context. 
<CountContext.Provider value={count} >
<Counter count={count}></Counter>
</CountContext.Provider>
4. now we can teleport & use it anywhere .
const c= usecontext(CountContext)
- CountContext.Provider makes the count value available to all child components via context (instead of passing it as props).



- it basically reduces DRY or Pop Drilling but doesnt optimize code ie re-rendering happens more.

## State Management
A cleaner way to store the state of your app.
Until now, the cleanest thing you can do is use the Context API ,It lets you teleport state.
But there are better solutions that get rid of the problems that Context Api has (unnecessary re-renders).

# Redux
Redux is a state managing library used in JavaScript apps. It simply manages the state of your application or in other words, it is used to manage the data of the application. It is used with a library like React. It makes easier to manage state and data. As the complexity of our application increases.
Building Blocks of redux:  
- Action
- Reducer
- Store

# Recoil
npm install recoil
A state management library for React
Written by some ex React folks
Other popular ones -
1. Zustand
2. Redux
Recoil
Has a concept of an "atom" to store the state
An atom can be defined outside the component
Can be teleported to any component
3 things
- useRecoilState
- useRecoilValue
- useSetRecoilState ===useState()