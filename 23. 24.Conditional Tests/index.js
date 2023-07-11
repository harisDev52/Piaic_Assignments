var car = "subaru";
console.log("".concat(car === "subaru", " | I predict true"));
console.log("".concat(car !== "subaru", " | I predict false"));
console.log("".concat(car === "SUBARU", " | I predict false"));
console.log("".concat(car.toLowerCase() === "subaru", " | I predict true"));
console.log("".concat(car.toUpperCase() === "subaru", " | I predict false"));
