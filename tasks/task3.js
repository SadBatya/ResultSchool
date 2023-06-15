const student = {
  name: 'Maxim',
  programmingLanguage: 'JavaScript',
}


handleObject = (obj, key, action) => {
  if(action === 'get'){
    return console.log(obj[key])
  }else if(action === 'add'){
    obj.key = ''
  }else if(action === 'delete'){
    delete obj[key]
  }else{
    return obj
  }
}
handleObject(student, 'name', 'get')

handleObject(student, 'age', 'add')
console.log(student)

handleObject(student, 'name', 'delete')
console.log(student)






