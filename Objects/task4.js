const student = {
  fullName: 'Максим',
  experienceInMonths: 12,
  stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}

giveJobToStudent = (student, jobName) => {
  student.job = jobName
  let updatedStudent = {
    name:'Vladimir',
    ...student
  }
  console.log(updatedStudent)
  console.log(student)
}

const updatedStudent = giveJobToStudent(student, 'веб-разработчик');
