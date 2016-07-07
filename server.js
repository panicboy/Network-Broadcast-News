const net = require('net');
var socketList = [];

const server = net.createServer((socket) => {
  console.log('socket connection made');
  socketList.push(socket);
  socket.write('hi there, client!');

  socket.on('data', (data) => {
    var theData = data.toString();
    console.log('data: ', theData);
    for (var i = socketList.length - 1; i >= 0; i--) {
      if(socketList[i]==socket){
        socketList[i].write('sent');
      } else {
        socketList[i].write(theData);
      }
    }
  });

  socket.on('end', () => {
    console.log('client disconnected');
  });

});

server.listen('6969');
