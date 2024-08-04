# Q26:- Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

#### • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

#### • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

#### • Write one version of this program that runs the if block and another that runs the else block.

## Answer

### Version 1: Runs the if block

```typescript
console.log('version 1');

// Declare a variable called alien_color and assign it the value 'green'
let alien_color: string = 'green';

// Check if the alien's color is green
if (alien_color === 'green') {
    // If the condition is true, print a message that the player just earned 5 points
    console.log("Player just earned 5 points for shooting the alien.");
} else {
    // If the condition is false, print a message that the player just earned 10 points
    console.log("Player just earned 10 points.");
}
```

### Version 2: Runs the else block

```typescript
console.log('version 2');

// Declare a variable called alien_color and assign it the value 'red'
let alien_color1: string = 'red';

// Check if the alien's color is green
if (alien_color1 === 'green') {
    // If the condition is true, print a message that the player just earned 5 points
    console.log("Player just earned 5 points for shooting the alien.");
} else {
    // If the condition is false, print a message that the player just earned 10 points
    console.log("Player just earned 10 points.");
}
```

