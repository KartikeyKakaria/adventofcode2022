const fs = require('fs')
const data = fs.readFileSync('inputs/day1.txt').toString();
const parentArr = data.split('\n');
let childrenarr = [];
let calories = [];
parentArr.forEach(element => {
    if (Number(element) != 0) {
        childrenarr.push(Number(element))
    } else {
        calories.push(childrenarr)
        childrenarr = [];
    }
})
const calorie = calories.map(element => {
    const sum = element.reduce((a, b) => {
        return a + b
    })
    return sum;
})
console.log(Math.max.apply(null, calorie))