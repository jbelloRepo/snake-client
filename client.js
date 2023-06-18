const net = require("net");

// Establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // Register a "connect" handler
  conn.on("connect", () => {
    console.log("Successfully connected to the game server");
    conn.write("Name: JBL"); // send the name to servers
  });

  // Event handler for "end" event
  conn.on("end", () => {
    console.log("Connection ended");
  });

  return conn;
};

module.exports = { connect };
