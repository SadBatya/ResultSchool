let arr = [];

for (let i = 1; i <= 3; i++) {
  let iAdd = [];
  for (let j = 1; j <= 5; j++) {
    iAdd.push(j);
  }
  arr.push(iAdd);
}
console.table(arr);
