const fs = require("fs");
const data = fs.readFileSync("inputs/day2.txt").toString().split("\n");
const scoreSchema = {
    "A": {
        "X": 3 + 1,
        "Y": 6 + 2,
        "Z": 0 + 3,
    },
    "B": {
        "X": 0 + 1,
        "Y": 3 + 2,
        "Z": 6 + 3
    },
    "C": {
        "X": 6 + 1,
        "Y": 0 + 2,
        "Z": 3 + 3,
    }
}
let myScore = 0;
data.forEach(move => {
    const elfMove = move[0];
    const myMove = move[2];
    myScore += scoreSchema[elfMove][myMove];

})
console.log(myScore)