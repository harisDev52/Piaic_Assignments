var magicians = ['jhon', 'harris', 'jerry'];
var make_great = function (arr) {
    magicians = arr.map(function (el) { return el + " the Great"; });
};
make_great(magicians);
var show_magicians = function (arr) {
    arr.forEach(function (el) { return console.log(el); });
};
show_magicians(magicians);
