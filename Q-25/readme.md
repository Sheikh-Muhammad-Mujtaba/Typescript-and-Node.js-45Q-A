# Q25:- Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

#### • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

#### • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

## Answer
### version 1
```typescript
// Declare a variable called alien_color and assign it the value 'green'
let alien_color: string = 'green';

// Check if the alien's color is green
if (alien_color === 'green') {
    // If the condition is true, print a message that the player just earned 5 points
    console.log("Player just earned 5 points.");
}
```
### Version 2
```typescript
// Declare a variable called alien_color1 and assign it the value 'red'
let alien_color1: string = 'red';

// Check if the alien's color is yellow
if (alien_color1 === 'yellow') {
    // This condition is false, so this block will not execute
    console.log("Player just earned 5 points.");
}

```