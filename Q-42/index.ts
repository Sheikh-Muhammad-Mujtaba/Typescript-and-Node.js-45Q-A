// Function to print each magician's name
function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Function to add "the Great" to each magician's name
function makeGreat(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `${magicians[i]} the Great`;
    }
}

// Array of magician names
const magicians: string[] = ['David Copperfield', 'Penn & Teller', 'David Blaine', 'Criss Angel'];

// Call makeGreat() to modify the array
makeGreat(magicians);

// Call showMagicians() to print the modified list
showMagicians(magicians);
