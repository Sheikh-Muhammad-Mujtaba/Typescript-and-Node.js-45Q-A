// Function to print each magician's name
function showMagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Array of magician names
var magicians = ['David Copperfield', 'Penn & Teller', 'David Blaine', 'Criss Angel'];
// Call the function and pass the array
showMagicians(magicians);
