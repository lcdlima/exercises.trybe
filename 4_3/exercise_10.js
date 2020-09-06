//Create a function that receives an integer N and returns the sum of all numbers from 1 to N.

function sum(n) {
  let sum = 0;
  while (n != 0) {
    sum += n;
    n -= 1;
  }
  return sum;
}

console.log(sum(4));