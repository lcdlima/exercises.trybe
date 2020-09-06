//Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5

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

const newObject = () => {
  const allLessons = {
    lesson1,
    lesson2,
    lesson3
  };
  return allLessons;
}

const createReport = (professor) => {
  const object = newObject();
  let answer = {
    professor: professor,
    materia: [],
    estudantes: 0
  };
  Object.keys(object).forEach(key => {
    if (object[key].professor === professor) {
      answer.materia.push(object[key].materia);
      answer.estudantes += object[key].numeroEstudantes
    }
  });
  console.log(answer);
}

createReport('Carlos');