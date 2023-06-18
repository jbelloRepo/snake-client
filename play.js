const {connect} = require("./client");

// connect to the sever
console.log("Connecting ...");
const sConn = connect();


// return any message from the sever
sConn.on("data", (data) => {
  console.log("Server says:", data);
});


const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  //event handler for stdin
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') { // Check for Ctrl + C input
    process.exit(); // Terminate the game
  }
};

setupInput();