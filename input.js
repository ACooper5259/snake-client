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
    // console.log('left')
    connection.write('Move: left')
  } else if (key === '\u0064') {
    connection.write('Move: right')
  } else if (key === '\u0073') {
    connection.write('Move: down')
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

// setUpInput();

// on.()

// conn.write('Move: up');
// conn.write('Move: up');
// const upInterval = setInterval(() => conn.write('Move: up'), 100)
// setTimeout(() => clearInterval(upInterval), 25000)
// const rightInterval = setInterval(() => conn.write('Move: right'), 1000)
// setTimeout(() => clearInterval(rightInterval), 5000)

module.exports = { setUpInput };