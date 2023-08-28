const goals = [8, 1, 1, 3, 2, -1, 5];

const bestMatchNumber = goals.sort((a, b) => b - a)[0];
const bestMatchIndex = goals.indexOf(bestMatchNumber) + 1
const badMatchNumber = Math.min(...goals);
const badMatchIndex = goals.indexOf(badMatchNumber) + 1
const goalsSum = goals.reduce((acc, number) => acc + number)
const mediumGoalsScore = goalsSum/2;
const sortGoals = goals.sort((a, b) => a - b).join(', ')


console.log(`Самый результатиxвный матч был под номером ${bestMatchIndex} в нем было забито ${bestMatchNumber} голов`)
console.log(`Самый результативный матч был под номером ${badMatchIndex} в нем было забито ${badMatchNumber} голов`)
console.log(`Общее количество голов за сезон равно ${goalsSum}`)
console.log(`Среднее количество голов за матч равно ${mediumGoalsScore}`)
console.log(sortGoals)
