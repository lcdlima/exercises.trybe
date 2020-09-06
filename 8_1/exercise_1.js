//OLD JS

/*function factorial(number) {
  if (number ==  0) {
      return 1;
  }
  else {
    var answer = 1;
    while (number > 0) {
      answer = answer * number;
      number -= 1;
    }
  return answer;
  }
}

console.log (factorial (0));*/

//ES6

/*const factorial = number => {
  if (this ==  0) {
    return 1;
  }
  else {
    let answer = 1;
    while (number > 0) {
      answer = answer * number;
      number -= 1;
    }
  return answer;
  }
}
console.log (factorial (0));*/

//ES6 recursivamente

const factorial = (x) => { 

  if (x === 0)
 {
    return 1;
 }
  return x * factorial(x-1);
         
}
console.log(factorial(5));