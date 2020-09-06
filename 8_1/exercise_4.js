const global = ['Python', 'HTML', 'CSS', 'JavaScript', 'Molecular Biology']

const function1 = (string1, string2) => {
  let array1 = string1.split('');
  for (let i = 0; i < array1.length; i += 1) {
    if (array1[i] === 'x' || array1[i] === 'X'){
      array1[i] = string2;
    }
  }
  let answer = array1.join('');
  return answer;
}

const function2 = () => {
  const result1 = function1('Hello Tryber X, tudo bem?', 'Leticia');
  global.sort();
  const result2 = global.join(', ')
  console.log (`${result1} Minhas cinco principais habilidades são ${result2}`);
}

function2();