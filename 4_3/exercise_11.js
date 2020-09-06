//Create a function that receives a word string and another string ending. 
//Check that the ending string is the end of the word string. 
//Consider that the ending string will always be less than the word string.

function verifyEnd(stringWord, stringEnd) {
  let word = stringWord.split('');
  let end = stringEnd.split('');
  let i = 0;
  //let wordSize = word.length;
  //let endSize = end.length;

  for (let index = (word.length - end.length); i < (word.length - 1); i += 1) {
    if (word[index] != end[i]) {
      return false
      break;
    }
    return true;
  }
}

console.log(verifyEnd('carolina', 'ina'));