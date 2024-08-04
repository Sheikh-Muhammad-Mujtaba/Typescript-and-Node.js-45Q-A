// Function to print each magician's name
function showMagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Function to create a new array with "the Great" added to each magician's name
function makeGreat(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        greatMagicians.push("".concat(magician, " the Great"));
    }
    return greatMagicians;
}
// Array of magician names
var magicians = ['David Copperfield', 'Penn & Teller', 'David Blaine', 'Criss Angel'];
// Create a new array with "the Great" added to each magician's name
var greatMagicians = makeGreat(magicians);
// Call showMagicians() to print the original list
console.log("Original Magicians:");
showMagicians(magicians);
// Call showMagicians() to print the modified list
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
