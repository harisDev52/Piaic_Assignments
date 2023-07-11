var make_sandwich = function (arr) {
    console.log("Your sandwich will include : ");
    return arr.forEach(function (el) { return console.log(el); });
};
make_sandwich(["tomatoes", "cheese", "onions"]);
make_sandwich(["tomatoes", "cheese"]);
make_sandwich(["cheese", "onions"]);
