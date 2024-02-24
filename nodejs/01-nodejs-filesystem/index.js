const math = require("math");
function root(inputNumber) {
  return math.sqrt(inputNumber);
}
let inputNumber = 36;
const result = root(inputNumber);
console.log(`the root number of ${inputNumber} is`, result);
