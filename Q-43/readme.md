# Q43:- Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


## Answer:
```typescript
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

```