
var names = ["Taimoor", "Qambar", "Zuhaib", "Moiz"]

var notAttending = "Moiz"

names = ["Taimoor", "Qambar", "Zuhaib", "Basit"]

console.log("I found a bigger table therefore I am going to invite more people")

names.unshift("Jhon") // Start
names.splice(Math.round(names.length / 2) , 0 , "Haris") // Middle
names.push("Noor") // Last


console.log("I can invite only two people for dinner.")

//removing names
while (names.length > 2) {
   var removedName = names.pop()
    console.log("Sorry I cannot invite you at this moment " + removedName)
}

names.forEach(el => {
    console.log(`Hello I would like to invite you over dinner please honor me as your table is reserved as the name of ${el} . Also unfortunately our friend ${notAttending} can't attend`)
})