import React, { useState } from 'react'

const App = () => {
  const [count , setCount] = useState(0) ; 

  return (
    <div>
      <b>
        hi there 
      </b>
      <Counter></Counter>
    </div>
  )
}

const Counter = () => { 

  function increaseCount() { 
    
  }

  return (
    <div>
      <h1>1</h1>
      <button onClick={increaseCount}>Increase count</button>
    </div>
  )
}

export default App