const { connect } = require("./client");
const { setupInput } = require("./input");

// connect to the sever
console.log("Connecting ...");
const sConn = connect();

// return any message from the sever
sConn.on("data", (data) => {
  console.log("Server says:", data);
});

setupInput();
