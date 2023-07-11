var personName = "jhon doe"

console.log(personName.toLowerCase()) // Lower Case
console.log(personName.toUpperCase()) // Upper Case

var splittedName = personName.split(" ")

const titleCase  = splittedName.map(el => {
    return el[0].toUpperCase() + el.slice(1)
}).join(" ")

console.log(titleCase) //Title Case