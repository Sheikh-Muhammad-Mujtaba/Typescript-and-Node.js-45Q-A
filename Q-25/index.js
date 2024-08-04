// Version 1: Passes the if test
console.log('version 1');
// Declare a variable called alien_color and assign it the value 'green'
var alien_color = 'green';
// Check if the alien's color is green
if (alien_color === 'green') {
    // If the condition is true, print a message that the player just earned 5 points
    console.log("Player just earned 5 points.");
}
// Version 2: Fails the if test
console.log('version 2');
// Declare a variable called alien_color1 and assign it the value 'red'
var alien_color1 = 'red';
// Check if the alien's color is yellow
if (alien_color1 === 'yellow') {
    // This condition is false, so this block will not execute
    console.log("Player just earned 5 points.");
}
