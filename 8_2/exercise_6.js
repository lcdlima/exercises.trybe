//Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const allLessons = {
    lesson1: {
      materia: 'Matemática',
      numeroEstudantes: 20,
      professor: 'Maria Clara',
      turno: 'manhã'
    },
    lesson2: { 
      materia: 'História', 
      numeroEstudantes: 20, 
      professor: 'Carlos' },
    lesson3: {
      materia: 'Matemática',
      numeroEstudantes: 10,
      professor: 'Maria Clara',
      turno: 'noite'
    }
  }

const totalNumberStudents = () => {
  const students1 = allLessons.lesson1;
  const students2 = allLessons.lesson2;
  const students3 = allLessons.lesson3;
  const sum = students1.numeroEstudantes + students2.numeroEstudantes + students3.numeroEstudantes;
  console.log (sum);
}

totalNumberStudents();