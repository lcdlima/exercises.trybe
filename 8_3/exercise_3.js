const assert = require('assert');

function mySum(arr) {
  let result = 0;
  for (let item in arr) {
    result += arr[item];
  }
  return result;
}

assert.deepStrictEqual(mySum([1, 2, 3, 4]), 10);
assert.deepStrictEqual(mySum([1, -2, -3, 4]), 0);