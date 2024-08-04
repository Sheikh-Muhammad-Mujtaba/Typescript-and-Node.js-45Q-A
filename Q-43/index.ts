// Function to print each magician's name
function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Function to create a new array with "the Great" added to each magician's name
function makeGreat(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const magician of magicians) {
        greatMagicians.push(`${magician} the Great`);
    }
    return greatMagicians;
}

// Array of magician names
const magicians: string[] = ['David Copperfield', 'Penn & Teller', 'David Blaine', 'Criss Angel'];

// Create a new array with "the Great" added to each magician's name
const greatMagicians: string[] = makeGreat(magicians);

// Call showMagicians() to print the original list
console.log("Original Magicians:");
showMagicians(magicians);

// Call showMagicians() to print the modified list
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
