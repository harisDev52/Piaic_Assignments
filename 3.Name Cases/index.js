var personName = "jhon doe dev";
console.log(personName.toLowerCase()); // Lower Case
console.log(personName.toUpperCase()); // Upper Case
var splittedName = personName.split(" ");
var titleCase = splittedName.map(function (el) {
    return el[0].toUpperCase() + el.slice(1);
}).join(" ");
console.log(titleCase); //Title Case
