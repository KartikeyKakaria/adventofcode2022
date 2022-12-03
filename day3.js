const fs = require("fs")
const data = fs.readFileSync("inputs/day3.txt", "utf-8").split("\n");
const alphabets = [1, "a", "b", "c", "d", "e", "f", 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

function getAlphaVal(alphabet) {
    return alphabets.indexOf(alphabet);
}

function removeDuplicates(str) {
    return Array.from(new Set(Array.from(str))).toString();
}
let priorities = 0;
data.forEach(rucksack => {
    const compartment1 = removeDuplicates(rucksack.slice(0, rucksack.length / 2));
    const compartment2 = removeDuplicates(rucksack.slice(rucksack.length / 2));
    for (i in compartment1) {
        const char = compartment1[i]
        const exists = compartment2.indexOf(char) !== -1 && char !== ",";
        if (exists) {
            priorities += getAlphaVal(char)
        }
    }
})
console.log(priorities)