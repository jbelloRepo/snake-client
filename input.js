const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  //event handler for stdin
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === "\u0003") {
    // Check for Ctrl + C input
    process.exit(); // Terminate the game
  }
};

module.exports = {setupInput};