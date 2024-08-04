#  Q27:- Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

#### • If the alien is green, print a message that the player earned 5 points.

#### • If the alien is yellow, print a message that the player earned 10 points.

#### • If the alien is red, print a message that the player earned 15 points.

#### • Write three versions of this program, making sure each message is printed for the appropriate color alien.

## Answer 
### Version 1: Alien is green

```typescript
console.log('version 1');

// Declare a variable called alien_color and assign it the value 'green'
let alien_color: string = 'green';

// Check the color of the alien and print the appropriate message
if (alien_color === 'green') {
    console.log("Player earned 5 points.");
} else if (alien_color === 'yellow') {
    console.log("Player earned 10 points.");
} else if (alien_color === 'red') {
    console.log("Player earned 15 points.");
}
```

### Version 2: Alien is yellow

```typescript
console.log('version 2');

// Declare a variable called alien_color and assign it the value 'yellow'
let alien_color1: string = 'yellow';

// Check the color of the alien and print the appropriate message
if (alien_color1 === 'green') {
    console.log("Player earned 5 points.");
} else if (alien_color1 === 'yellow') {
    console.log("Player earned 10 points.");
} else if (alien_color1 === 'red') {
    console.log("Player earned 15 points.");
}
```

### Version 3: Alien is red

```typescript
console.log('version 3');

// Declare a variable called alien_color and assign it the value 'red'
let alien_color2: string = 'red';

// Check the color of the alien and print the appropriate message
if (alien_color2 === 'green') {
    console.log("Player earned 5 points.");
} else if (alien_color2 === 'yellow') {
    console.log("Player earned 10 points.");
} else if (alien_color2 === 'red') {
    console.log("Player earned 15 points.");
}
```
