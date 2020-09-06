const addLastName = (lastName) => {
  let person = {
    firstName: 'Leticia',
    age: '27',
    job: 'Student'
  }
  const newKey = 'fullName';
  const fullName = `${person.firstName} ${lastName}`;
  person[newKey] = fullName;
  console.log (person);
}

addLastName('Lima');