// Array of places to visit
let placesToVisit: string[] = ["Kyoto", "Amsterdam", "Reykjavik", "Sydney", "Cape Town"];

// Print the array in its original order
console.log("Original Order:");
console.log(placesToVisit);

// Print the array in alphabetical order without modifying the actual list
let sortedPlaces = [...placesToVisit].sort();
console.log("\nAlphabetical Order:");
console.log(sortedPlaces);

// Show that the array is still in its original order
console.log("\nOriginal Order (unchanged):");
console.log(placesToVisit);

// Print the array in reverse alphabetical order without modifying the actual list
let reverseSortedPlaces = [...placesToVisit].sort().reverse();
console.log("\nReverse Alphabetical Order:");
console.log(reverseSortedPlaces);

// Show that the array is still in its original order
console.log("\nOriginal Order (unchanged):");
console.log(placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("\nReversed Order:");
console.log(placesToVisit);

// Reverse the order of the list again to get back to the original order
placesToVisit.reverse();
console.log("\nOriginal Order Restored:");
console.log(placesToVisit);

// Sort the array so it's stored in alphabetical order
placesToVisit.sort();
console.log("\nAlphabetical Order (modified):");
console.log(placesToVisit);

// Sort to change the array so it's stored in reverse alphabetical order
placesToVisit.sort().reverse();
console.log("\nReverse Alphabetical Order (modified):");
console.log(placesToVisit);
