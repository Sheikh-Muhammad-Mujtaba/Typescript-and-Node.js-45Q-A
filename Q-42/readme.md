# Q42:- Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

## Answer:
```typescript
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

```