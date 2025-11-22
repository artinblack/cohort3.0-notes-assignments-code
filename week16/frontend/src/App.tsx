import React, { useEffect, useRef, useState } from 'react'

const App = () => {

  const [socket , setSocket] = useState<any>() ; 
  const inputRef = useRef<HTMLInputElement>(null) ; 

  function sendMessage() { 
    if(!socket) { 
      return
    }
    const message = inputRef.current?.value; 
    socket.send(message)
  } 

  useEffect(() => { 
    const ws = new WebSocket("ws://localhost:8080") ; 
  
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSocket(ws) ; 

    ws.onmessage = (e) => { 
      alert(e.data) ; 
    }
  },[])

  return (
    <div>
      <input type="text" placeholder='Message...' ref={inputRef} />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App ;  