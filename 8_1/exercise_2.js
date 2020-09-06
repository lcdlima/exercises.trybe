const longestWord = sentence => {
  let array = sentence.split(' ');
  let bigger = 0;
  let answer = '';  
  for (let i = 0; i < array.length; i += 1){
    let n = array[i].length;
    if (n > bigger) {
      bigger = n;
      answer = array[i];
    }
  }
  return answer
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"))