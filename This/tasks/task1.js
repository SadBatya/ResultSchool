const student = {
  stack: ['HTML'],
  level: 1,
  improveLevel() {
    this.level += 1

    //Решение с помощью switch
    switch(this.level){
      case 1:
        console.log(student.stack)
        break;
      case 2:
        this.stack.push('CSS')
        break;
      case 3:
        this.stack.push('JavaScript')
        break;
      case 4:
        this.stack.push('React')
        break;
      case 5:
        this.stack.push('NodeJS')
        break;
      default: 
        console.log('Студент выучил все технологии')
    }


    //Решение с помощью if else

    // if(this.level === 1){
    //   console.log(student)
    // }else if(this.level === 2){
    //   this.stack.push('CSS')
    // }else if(this.level === 3){
    //   this.stack.push('JavaScript')
    // }else if(this.level === 4){
    //   this.stack.push('React')
    // }else if(this.level === 5){
    //   this.stack.push('NodeJS')  
    // }else if(this.level > 5){
    //   return console.log('Студент выучил все технологии')
    // }
  }
}

student.improveLevel()
// console.log(student)
console.log(student.stack)//[HTML, CSS]


student.improveLevel()
// console.log(student)
console.log(student.stack)//[HTML, CSS, JavaScript]


student.improveLevel()
// console.log(student)
console.log(student.stack)//[HTML, CSS, JavaScript, React]



student.improveLevel()
// console.log(student)
console.log(student.stack)// [HTML, CSS, JavaScript, React, NodeJs]

student.improveLevel()// Студент все выучил все технологии





