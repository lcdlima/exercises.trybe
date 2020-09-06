//Crie uma função para contar quantos estudantes assistiram as aulas de matemática. Use o objeto criado no exercício 5.

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

const mathStudents = () => {
  const object = newObject();
  let sum = 0;
  Object.keys(object).forEach((key) => {
    if (object[key].materia === 'Matemática') {
      sum += object[key].numeroEstudantes;
    }
  })
  console.log(sum);
}

mathStudents();