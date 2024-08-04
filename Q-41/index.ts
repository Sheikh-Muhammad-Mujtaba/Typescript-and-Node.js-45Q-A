// Function to print each magician's name
function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Array of magician names
const magicians: string[] = ['David Copperfield', 'Penn & Teller', 'David Blaine', 'Criss Angel'];

// Call the function and pass the array
showMagicians(magicians);
