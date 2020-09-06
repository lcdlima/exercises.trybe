const assert = require('assert');

function isAbove(num1, num2) {
  return num1 > num2;
}

assert.deepStrictEqual(isAbove(5, 4), true);
assert.deepStrictEqual(isAbove(4, 5), false);
