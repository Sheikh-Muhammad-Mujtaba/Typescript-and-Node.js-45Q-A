// Function to create and print a summary of the sandwich order
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nSandwich order summary:");
    console.log("Items included:");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- ".concat(item));
    }
    // console.log(""); 
}
// Call the function with different numbers of arguments
makeSandwich('lettuce', 'tomato', 'chicken');
makeSandwich('cheese', 'beef', 'mustard', 'pickles');
makeSandwich('avocado', 'bacon', 'egg');
