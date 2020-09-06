//Crie uma função que verifique se o par (chave / valor) existem na função. 
//Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const verifyPair = (object, property, value) => {
  debugger
  const arrayPairs = Object.entries(object);
  console.log(arrayPairs.includes([ property, value]));
}

verifyPair(lesson3, 'turno', 'noite');