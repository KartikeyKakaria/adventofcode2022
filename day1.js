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
let calorie = calories.map(element => {
    const sum = element.reduce((a, b) => {
        return a + b
    })
    return sum;
})
console.log(Math.max.apply(null, calorie))

//part2
Array.prototype.remove = function(value) {
    this.splice(this.indexOf(value), 1);
}
let calorieSum = 0;
for (let i = 0; i < 3; i++) {
    let max = Math.max.apply(null, calorie)
    calorieSum += max
    calorie.remove(max)
}
console.log(calorieSum)