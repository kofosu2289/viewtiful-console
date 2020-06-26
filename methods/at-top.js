const colors = require("colors");

const atTop = (...strings) => {
  console.clear();
  strings.forEach(str => console.log(colors.bgMagenta.cyan.bold(str)));
};

module.exports = atTop;
