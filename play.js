const {connect} = require("./client");

console.log("Connecting ...");
const sConn = connect();

sConn.on("data", (data) => {
  console.log("Server says:", data);
});
