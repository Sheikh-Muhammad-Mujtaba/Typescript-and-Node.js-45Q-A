// Function to print each magician's name
function showMagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Function to add "the Great" to each magician's name
function makeGreat(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "".concat(magicians[i], " the Great");
    }
}
// Array of magician names
var magicians = ['David Copperfield', 'Penn & Teller', 'David Blaine', 'Criss Angel'];
// Call makeGreat() to modify the array
makeGreat(magicians);
// Call showMagicians() to print the modified list
showMagicians(magicians);
