const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('Successfully connected to game server')
    conn.write('Name: ACO');


    // conn.write('Move: up');
    // conn.write('Move: up');
    // const upInterval = setInterval(() => conn.write('Move: up'), 100)
    // setTimeout(() => clearInterval(upInterval), 25000)
    // const rightInterval = setInterval(() => conn.write('Move: right'), 1000)
    // setTimeout(() => clearInterval(rightInterval), 5000)
  });

  conn.on('data', (data) => {
    console.log(data)
  });



  return conn;
}

module.exports = { connect };