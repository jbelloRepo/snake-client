const net = require("net");

// Establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  return conn;
};

console.log("Connecting ...");
const sConn = connect();

sConn.on("data", (data) => {
  console.log("Server says:", data);
});
