//Create a function that takes an array of integers and returns the integer that occurs most often.
//Test array: [2, 3, 2, 5, 8, 2, 3];
//Expected value in the function return: 2

function mostOften (array) {
  let mode = 0;
  let answer = '';
  for (let index in array) {
    let current = array[index];
    let idx = array.indexOf(current);
    let counter = 0;
    while (idx != -1) {
      idx = array.indexOf(current, idx+1);
      counter += 1;
    }
    if (counter > mode) {
      mode = counter;
      answer = current;
    }
  }
  return answer
}

console.log(mostOften ([1, 3, 1, 1, 8, 2, 3]));