function isPalindrome(word){
  const word2 = word.split('').reverse().join('')
  if(word == word2){
    return console.log(true)
  }
  return console.log(false)
}


isPalindrome('racecar') // true 
isPalindrome('programmer') // false


