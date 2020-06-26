const colors = require("colors");

const atTop = (str) => {
  console.clear();
  console.log(colors.bgMagenta.cyan.bold(str));
};

module.exports = atTop;
