const { connect } = require("http2");
// Stores the active TCP connection object.
let connection;
/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === '\u0077') {
    // console.log("UP")
    connection.write('Move: up')
  } else if (key === '\u0061') {
    connection.write('Move: left')
  } else if (key === '\u0064') {
    connection.write('Move: right')
  } else if (key === '\u0073') {
    connection.write('Move: down')
  } else if (key === '\u006A') {
    connection.write('Say: SOS')
  } else if (key === '\u0069') {
    connection.write('Say: is it dinner time?')
  } else if (key === '\u006C') {
    connection.write('Say: finally!')
  }
}


const setUpInput = function (conn) {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput)
  return stdin;
}



module.exports = { setUpInput };