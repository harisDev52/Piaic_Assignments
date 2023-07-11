var favorite_fruits = ["haris", "admin", "zuhaib", "saqib"];
favorite_fruits.forEach(function (el) {
    if (el === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello " + el + " , thank you for logging in again");
    }
});
