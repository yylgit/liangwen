
const WebSocket = require('ws');
const ws = new WebSocket('ws://127.0.0.1:3000/910ff412-36c2-4115-a9b0-0499acd839a9', {
  perMessageDeflate: false
});

ws.on('open', function open() {
  // ws.send('something');
});
 
ws.on('message', function incoming(data) {
  console.log(data);
});