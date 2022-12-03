const fs = require("fs");
const data = fs.readFileSync("inputs/day2.txt").toString().split("\n");

//part1 schema
// const scoreSchema = {
//     "A": {
//         "X": 3 + 1,
//         "Y": 6 + 2,
//         "Z": 0 + 3,
//     },
//     "B": {
//         "X": 0 + 1,
//         "Y": 3 + 2,
//         "Z": 6 + 3
//     },
//     "C": {
//         "X": 6 + 1,
//         "Y": 0 + 2,
//         "Z": 3 + 3,
//     }
// }

//part2 schema
const scoreSchema = {
    "A": {
        "X": 0 + 3, //0 as we lost, 3 as its scissors
        "Y": 3 + 1, //3 as its draw, 1 as its rock
        "Z": 6 + 2, //6 as we won, 2 as its paper
    },
    "B": {
        "X": 0 + 1, //0 as we lost , 1 as its rock
        "Y": 3 + 2, //3 as its draw, 2 as it will be paper
        "Z": 6 + 3 //6 as we wil win, 3 as it will be scissors
    },
    "C": {
        "X": 0 + 2, //0 as we lost, 2 as its paper
        "Y": 3 + 3, //3 as its draw, 3 as its scissors
        "Z": 6 + 1, //6 as we won, 1 as its rock
    }
}
let myScore = 0;
data.forEach(move => {
    const elfMove = move[0];
    const myMove = move[2];
    myScore += scoreSchema[elfMove][myMove];
})
console.log(myScore)