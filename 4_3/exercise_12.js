//Make a program that receives a string in Roman numerals and returns the number that the string represents.

function transformNumber(number) {
  debugger
  let numberArray = number.split('');
  let romanNumbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let answer = 0;
  for (let i = 0; i < numberArray.length; i += 1 ) {
    let index = Object.keys(romanNumbers).indexOf(numberArray[i]);
    let nextIndex = Object.keys(romanNumbers).indexOf(numberArray[i+1]);
    if (index < nextIndex) {
      answer -= Object.values(romanNumbers)[index];
    } else {
      answer += Object.values(romanNumbers)[index];
    }
  }
  return answer;
}

console.log(transformNumber('DCIX'));