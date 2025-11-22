import { create } from "zustand";


// we use "use" in hooks this is a custom hook 
export const useCounterStore = create((setCount) => ({
    count : 0 , 
    increment : () => {
        setCount((state) => ({count : state.count + 1}))
    } , 
    decrement : () => {
        setCount((state) => ({count : state.count - 1}))
    },
    incrementAsync : async () => { 
        await new Promise((resolve) => setTimeout(resolve,3000)) ; 
        console.log('hello there') ; 
        setCount((state) => ({count : state.count + 1}))
    }, 
}))