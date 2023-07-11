var names = ["Taimoor", "Qambar", "Zuhaib", "Moiz"];
var notAttending = "Moiz";
names = ["Taimoor", "Qambar", "Zuhaib", "Basit"];
console.log("I found a bigger table therefore I am going to invite more people");
names.unshift("Jhon"); // Start
names.splice(Math.round(names.length / 2), 0, "Haris"); // Middle
names.push("Noor"); // Last
names.forEach(function (el) {
    console.log("Hello I would like to invite you over dinner please honor me as your table is reserved as the name of ".concat(el, " . Also unfortunately our friend ").concat(notAttending, " can't attend"));
});
