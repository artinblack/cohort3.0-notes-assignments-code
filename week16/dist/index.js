// import { CONNECTING } from "ws";
import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });
// wss.on("connection" , (socket) =>  { 
//     console.log("user connected") ; 
//     setInterval(() => { 
//         socket.send("Current price of solana is " + Math.random());
//     },500)
//     socket.on("message",(e) => { 
//         console.log(e.toString()) ; 
//     })
// }) 
// wss.on('connection', function connection(ws) {
//     ws.on('error' , console.error) 
//     ws.on('message',function message(data) {
//         console.log(`received: %s`,data)
//     })
//     ws.send('something') ; 
// })
// wss.on('connection', (ws,ws2) => { 
//     console.log('user connected')
//     ws.on('message', (e) => { 
//         if(e.toString() === 'ping') { 
//             ws.send('pong') ; 
//         }
//     })
//     ws2.on('message',(e) => { 
//         if(e.toString() === 'ping') { 
//             ws.send(e)
//         }
//     })
// })
//# sourceMappingURL=index.js.map