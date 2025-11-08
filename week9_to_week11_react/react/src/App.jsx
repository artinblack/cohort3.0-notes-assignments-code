// import React from 'react'

import { useEffect, useRef, useState } from "react";
// import { useCounterStore } from "./store";

// const { useRef, useEffect, useState } = require("react");

// import { useRef } from "react"

// const App = () => {
//   const inputref = useRef() ; 

//   function focusOnInput(){ 
//     inputref.current.focus() ; 
//   }

//   return (
//     <div>
//       <input ref={inputref} type={"text"}></input>
//       <input type={"text"}></input>
//       <button onClick={focusOnInput}>
//         SUBMIT 
//       </button>
//     </div>
//   )
// }

// export default App

// import React, { useRef, useState } from 'react'

// const App = () => {
//   const [currentCount , setCurrentCount ] = useState(0) ; 
//   const timer = useRef() ; 
//   const startClock = () => { 
//     let value  = setInterval(() => { 
//       setCurrentCount(c => c + 1) ; 
//     },1000)
//     timer.current = value 
//   }

//   const stopClock = () => { 
//     clearInterval(timer.current)
//   }

//   return (
//     <div>
//       {currentCount}
//       <br />
//       <button onClick={startClock}>Start</button>
//       <button onClick={stopClock}>Stop</button>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//   return (
//     <div>
//       <Lightbulb/>
//     </div>
//   )
// }

// const Lightbulb = () => { 
//   const [count , setCount] = useState(0) ; 
//   return (
//     <>
//       <Increase count={count} setCount={setCount}/>
//       <Value count={count}/>
//     </>
//   )
// }

// const Increase = ({ count , setCount}) => { 
//   return <div>
//     <button onClick={() => setCount(count+1)}>
//       Increase count
//     </button>
//   </div>
// }

// const Value = ({count}) => { 
//   return <div>
//     <p>Count : {count}</p>
//   </div>
// }

// export default App

// import React, { createContext, useContext, useState } from 'react'

// const BulbContext = createContext() ; 

// const App = () => { 
//   return (
//     <div>
//       <Parent/>
//     </div>
//   )
// }

// const BulbContextProvider = ({children}) => {
//   const [bulbOn,setBulbOn] = useState(true) ; 
//   return (
//     <BulbContext.Provider value={{bulbOn : bulbOn , setBulbOn : setBulbOn }}>
//       {children} 
//     </BulbContext.Provider>
//   )
// }

// const Parent = () => { 
//   return (
//     <BulbContextProvider>
//       <LightBulb/>
//     </BulbContextProvider>
//   )
// }

// function LightBulb() { 
//     return (
//     <div>
//       <BulbState />
//       <ToggleBulb/>
//     </div>
//   )
// }

// function BulbState() { 
//   const { bulbOn } = useContext(BulbContext) ; 
//   return (
//     <div>
//       {bulbOn ? "Bulb on" :"Bulb off"}
//     </div>
//   )
// }

// function ToggleBulb() { 
//   const { setBulbOn } = useContext(BulbContext) ; 
//   return (
//     <div>
//       <button onClick={() => setBulbOn(c => !c)}>
//         Toggle the bulb 
//       </button>
//     </div>
//   )
// }

// export default App

// useCounter hook - custom hook 

// import React, { useState } from 'react'

// function useCounter() { 
//   const [count,setCount] = useState(0) ; 

//   const increaseCount = () => {
//     setCount(c => c+1) ; 
//   }
//   return [count , increaseCount]
// }

// const App = () => {
//   const [count , increaseCount ] = useCounter(); 


//   return (
//     <div>
//       <button  onClick={increaseCount}>
//         Increase {count}
//       </button>
//     </div>
//   )
// }

// export default App

// import React, { useEffect, useState } from 'react'

// function useFetch(url) { 
//   const [data , setData ] = useState(null) ; 
//   const [loading , setLoading] = useState(true) ;  
//   const [error , setError ] = useState(null) ; 

//   useEffect(() => { 
//     const fetchData = async() => { 
//       setLoading(true) ; 
//       try { 
//         const response = await fetch(url) ; 
//         const data = await response.json() ; 
//         setData(data) ; 
//       } catch(err) { 
//         setError(err) ; 
//       } finally { 
//         setLoading(false) ; 
//       }
//     }
//     fetchData() ;

//   },[url])

//   return {data , loading , error} 

// }

// const App = () => {
//   const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos') ; 
//   return (
//     <div>
      
//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error.message}</p>}
//       {data && (
//         <ul>
//           {data.map(post => (
//             <li key={post.id}>{post.title}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// }

// export default App

// const usePrev = (value) => { 
//   const ref = useRef() ; 

//   // update the ref with the current value after each render
//   useEffect(() => { 
//     ref.current = value ; 
//   },[value]) ; 

//   // return the previous value ( current value of ref before it is updated )
//   return ref.current ; 
// }; 

// function App() { 
//   const [count,setCount] = useState(0) ; 
//   const prevCount = usePrev(count) ; // track the previous count value 

//   return (
//     <div>
//       <h1>Counter with usePrev hook</h1>
//       <p>Current Count : {count} </p>
//       <p>Previous Count : {prevCount}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//     </div>
//   )
// }


// export default App    

// import React from 'react'

// const useDebounce = (originalFn) => { 
//   const currentClock = useRef() ; 

//   const fn = () => { 
//     clearTimeout(currentClock.current) ; 
//     currentClock.current = setTimeout(originalFn,30) ; 
//   }

//   return fn 
// }

// const App = () => {
//   function sendDataToAmazon() { 
//     fetch('l;dsjfaklsdfasdf') ; 
//   }
  
//   const debouncedFn = () => { 
//     useDebounce(sendDataToAmazon) ;
//   }

//   return (
//     <>
//       <input type="text" onChange={debouncedFn}></input>
//     </>
//   )
// }

// export default App

// ZUSTAND CODE 

// import React from 'react'
// import { create } from 'zustand' ; 

// // your store is a hook ! you can put anything 
// const useBear = create((set) => ({ 
//   // primitives
//   bears : 0 , 
//   // objects 
//   // functions 
//   increasePopulation : () => set((s) => ({bears : s.bears + 1})) , 
//   removeAllBears : () => set(({bears : 0 })) , 
//   updateBears : (newBears) => set({ bears : newBears}) , 
// }))

// function BearCounter() { 
//   const bears = useBear((s) => s.bears) ; 
//   return (
//     <h1>{bears} bears around here ... </h1>
//   )
// }

// function Controls() { 
//   const increasePopulation = useBear((s) => s.increasePopulation) ; 
//   return ( 
//     <button onClick={increasePopulation}>New bear !!</button>
//   )
// }

// const App = () => {
//   return (
//     <div>
//       <BearCounter/>
//       <Controls/>
//     </div>
//   )
// }

// export default App

// const App = () => { 
//   const count = useCounterStore((state) => state.count) ; 
//   const incrementAsync = useCounterStore((state) => state.incrementAsync) ; 
//   const decrement = useCounterStore((state) => state.decrement) ; 
  
//   return (
//     <div>
//       {count} 
//       <div>
//         <button onClick={incrementAsync}>Increase count</button>
//         <button onClick={decrement}>Decrease count</button>
//       </div>
//     </div>
//   )
// }

// export default App

import React from 'react'
import {  RecoilRoot, useRecoilValue } from 'recoil' ; 
import { counterAtom } from "./counter";




const App = () => {
  return (
    <RecoilRoot>
      <Counter/>
    </RecoilRoot>
  )
}

const Counter = () => { 
    
  return <div>
    <CurrentCount />
    <Increase />
    <Decrease />
  </div>
}

const CurrentCount = () => { 
  useRecoilValue(counterAtom) ; 
  return <div>
     {counterAtom}
  </div>
}

const Increase = ({setCount}) => { 
  return <div>
    <button onClick={() => setCount(c => c+1)}>Increase</button>
  </div>
}

const Decrease = ({setCount}) => { 
  return <div>
    <button onClick={() => setCount(c => c-1)}>Decrease</button>
  </div>
}


export default App