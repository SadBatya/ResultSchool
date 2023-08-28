//Абстракция - использование

class Footballer{
  constructor(name, club){
    this.name = name
    this.club = club
  }
  shoot(){}
  celebrateGoal(){}
  pass(){}
}

class Forward extends Footballer{
  constructor(name, club){
    super(name, club)
  }

  shoot(){
    console.log('Очень сильный удар')
  }
  celebrateGoal(){
    console.log('Даа! я забил гол')
  }
  pass(){
    console.log('Средненький пас')
  }
}