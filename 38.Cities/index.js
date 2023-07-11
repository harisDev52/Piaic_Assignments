var describe_city = function (city, country) {
    if (country === void 0) { country = "Pakistan"; }
    return console.log("".concat(city, " is in ").concat(country));
};
describe_city("Karachi");
describe_city("New York", "USA");
describe_city("Mumbai", "India");
