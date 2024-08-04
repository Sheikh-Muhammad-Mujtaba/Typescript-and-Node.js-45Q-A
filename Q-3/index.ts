// Declare a variable with the name "personName" and assign it the value "Ahmed"
let personName: string = "Ahmed";

// Convert the value of personName to lowercase and print it
console.log(personName.toLowerCase()); // Output: "ahmed"

// Convert the value of personName to uppercase and print it
console.log(personName.toUpperCase()); // Output: "AHMED"

// Capitalize the first letter and make the rest lowercase, then print it
console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase()); // Output: "Ahmed"