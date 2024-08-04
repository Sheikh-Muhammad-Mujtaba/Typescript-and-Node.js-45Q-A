// Store the numbers 1 through 9 in an array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array
numbers.forEach(function (number) {
    var ordinalEnding;
    // Use an if-else chain to determine the proper ordinal ending
    if (number === 1) {
        ordinalEnding = "st";
    }
    else if (number === 2) {
        ordinalEnding = "nd";
    }
    else if (number === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    // Print the number with its ordinal ending
    console.log("".concat(number).concat(ordinalEnding));
});
