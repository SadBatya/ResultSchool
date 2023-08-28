const developerNames = ['Maxim', 'Igor', 'Nastya', 'Irina']

// Цикл for

for (let i = 0; i < developerNames.length; i++) {
  console.log('i', i)
  console.log('item', developerNames[i])
}

// for of

for (const name of developerNames) {
  console.log(name)
}

// forEach

developerNames.forEach((name, index, array) => {
  console.log('name', name)
  console.log('index', index)
  console.log('array', array)
})