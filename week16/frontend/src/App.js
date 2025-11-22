import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useRef, useState } from 'react';
const App = () => {
    const [socket, setSocket] = useState();
    const inputRef = useRef(null);
    function sendMessage() {
        if (!socket) {
            return;
        }
        const message = inputRef.current?.value;
        socket.send(message);
    }
    useEffect(() => {
        const ws = new WebSocket("ws://localhost:8080");
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSocket(ws);
        ws.onmessage = (e) => {
            alert(e.data);
        };
    }, []);
    return (_jsxs("div", { children: [_jsx("input", { type: "text", placeholder: 'Message...', ref: inputRef }), _jsx("button", { onClick: sendMessage, children: "Send" })] }));
};
export default App;
//# sourceMappingURL=App.js.map