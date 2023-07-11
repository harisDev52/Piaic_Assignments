var current_users = ["haris", "saqib", "taimoor", "zuhaib", "moiz"];
var new_users = ["qambar", "faizan", "taimoor", "ZUHAIB", "ahsan"];
new_users.forEach(function (el) {
    var isExist = current_users.indexOf(el.toLowerCase()) !== -1;
    if (isExist) {
        console.log("usernot already in use , person will need to enter a new username");
    }
    else {
        console.log("username is available");
    }
});
