function sum(...other){
  return console.log(other.reduce((a, i) => a + i, 0)) 
}
sum(1,2,3)