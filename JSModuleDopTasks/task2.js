function isEqualSymbols(str1, str2) { 
  const aCharObject = buildCharObject(str1)
  const bCharObject = buildCharObject(str2)
  if(Object.keys(aCharObject).length !== Object.keys(bCharObject).length) {
    return false
  }
  for(let char in aCharObject) {
    if(aCharObject[char] !== bCharObject[char]) {
      return false
    }
  }
  return true
}


const buildCharObject = str => {
  const charObj = {}
  for(let char of str.replace(/[^\w]/g).toLowerCase()) {
    charObj[char] = charObj[char] + 1 || 1
  }
  return charObj
}


console.log(isEqualSymbols('адрес', 'среда')) // true 
console.log(isEqualSymbols('ноутбук', 'программист')) // false 


//эту задачу признаюсь половину списал