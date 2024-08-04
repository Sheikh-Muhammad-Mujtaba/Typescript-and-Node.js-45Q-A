function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`The shirt size is ${size} and the message printed on it is: "${message}"`);
}

// Call the function with default size and message
make_shirt(); // Large shirt with default message
make_shirt("Medium"); // Medium shirt with default message
make_shirt("Small", "Code is Life"); // Small shirt with a different message
