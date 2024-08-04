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
