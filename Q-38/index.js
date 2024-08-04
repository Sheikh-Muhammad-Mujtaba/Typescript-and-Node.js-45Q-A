function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the function for three different cities, including one not in the default country
describe_city("Karachi"); // Uses default country
describe_city("Lahore"); // Uses default country
describe_city("New York", "USA"); // Uses specified country
