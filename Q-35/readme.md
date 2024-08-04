# Q35:- Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 

#### • Modify your program to print a statement about each animal, such as A dog would make a great pet. 

#### • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

## Answer 
```typescript
// Array of animals with a common characteristic
let animals: string[] = ["Dog", "Cat", "Rabbit"];

// Use for loop to print a statement for each animal
for (let i = 0; i < animals.length; i++) {
    console.log(`A ${animals[i].toLowerCase()} would make a great pet.`);
}

// Print a concluding statement about the common characteristic of these animals
console.log("\nAny of these animals would make a great pet!");
```
