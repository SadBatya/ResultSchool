class Developer{
  constructor(fullName, age, position){
    this.fullName = fullName;
    this.age = age;
    this.position = position;
    let technologies = [];
  }

  code(){}

  learnNewTechnologies(technology){
    this.technologies.push(technology)
  }
}

class JuniorDeveloper extends Developer{
  constructor(fullname, age, position){
    super(fullname, age)
    this.position = position
  }
  
  code(){
    console.log(`${this.position} разработчик пишет код ${codelearnNewTechnologies('HTML', 'CSS', 'JavaScript')}`)
  }
}

const junior = new JuniorDeveloper('Vladimir', 25, 'Junior')
console.log(junior)
console.log(junior.code())