# Q18:- Seeing the World: Think of at least five places in the world you’d like to visit.

#### • Store the locations in a array. Make sure the array is not in alphabetical order.

#### • Print your array in its original order.

#### • Print your array in alphabetical order without modifying the actual list.

#### • Show that your array is still in its original order by printing it.

#### • Print your array in reverse alphabetical order without changing the order of the original list.

#### • Show that your array is still in its original order by printing it again.

#### • Reverse the order of your list. Print the array to show that its order has changed.

#### • Reverse the order of your list again. Print the list to show it’s back to its original order.

#### • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

#### • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


## Answer
```typescript
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

// Output
// Original Order:
// [ 'Kyoto', 'Amsterdam', 'Reykjavik', 'Sydney', 'Cape Town' ]

// Alphabetical Order:
// [ 'Amsterdam', 'Cape Town', 'Kyoto', 'Reykjavik', 'Sydney' ]

// Original Order (unchanged):
// [ 'Kyoto', 'Amsterdam', 'Reykjavik', 'Sydney', 'Cape Town' ]

// Reverse Alphabetical Order:
// [ 'Sydney', 'Reykjavik', 'Kyoto', 'Cape Town', 'Amsterdam' ]

// Original Order (unchanged):
// [ 'Kyoto', 'Amsterdam', 'Reykjavik', 'Sydney', 'Cape Town' ]

// Reversed Order:
// [ 'Cape Town', 'Sydney', 'Reykjavik', 'Amsterdam', 'Kyoto' ]

// Original Order Restored:
// [ 'Kyoto', 'Amsterdam', 'Reykjavik', 'Sydney', 'Cape Town' ]

// Alphabetical Order (modified):
// [ 'Amsterdam', 'Cape Town', 'Kyoto', 'Reykjavik', 'Sydney' ]

// Reverse Alphabetical Order (modified):
// [ 'Sydney', 'Reykjavik', 'Kyoto', 'Cape Town', 'Amsterdam' ]

```