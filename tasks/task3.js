const student = {
  name: 'Maxim',
  programmingLanguage: 'JavaScript',
}


// handleObject = (obj, key, action) => {
//   const userKey = key;
//   if(action === 'add'){
//     obj.userKey = '';
//     return student
//   }else if(action === 'delete'){
//     delete obj.userKey
//   }else(action === 'get'){
//     obj.userKey
//   }
// }

// function handleObject(obj, key, action){
//   if(action === 'add'){
//     Object.keys(student)
//   }
// }

// handleObject = (obj, key, action) => {
//   if(action === 'add'){
//     obj.value = key
//   }else if(action === 'delete')[
//     delete obj.value = key
//   ]
// }





const result = handleObject(student, 'programmingLanguage', 'delete');
console.log('result', result); // { name: 'Maxim' }