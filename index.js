const colors = require("colors");

const viewtifulConsole = {
  label(variables) {
    Object.keys(variables).forEach((variableName) => {
      const value = variables[variableName];
      console.log(colors.magenta(variableName));
      console.log(colors.magenta.bold("-> "), colors.cyan(value));
      console.log("");
    });
  },
};

module.exports = viewtifulConsole;
