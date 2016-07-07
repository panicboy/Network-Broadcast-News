const net = require('net');
const client = new net.Socket();

client.connect({port: 6969, host: 'localhost'}, (() => {
  console.log('Connected to server');
  client.write('Hi, server. I am connected to you.');
}));

process.stdin.on('data', (data) => {
  client.write(data.toString());
});

client.on('close', function() {
  console.log('Connection closed');
});

client.on('data', function(data) {
  console.log(data.toString());
});