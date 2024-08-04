# Q44:- Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

##  Answer:
```typescript
// Function to create and print a summary of the sandwich order
function makeSandwich(...items: string[]): void {
    console.log("\nSandwich order summary:");
    console.log("Items included:");
    for (const item of items) {
        console.log(`- ${item}`);
    }
    }

// Call the function with different numbers of arguments
makeSandwich('lettuce', 'tomato', 'chicken');
makeSandwich('cheese', 'beef', 'mustard', 'pickles');
makeSandwich('avocado', 'bacon', 'egg');

```