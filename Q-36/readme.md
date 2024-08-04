# Q36:- T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.


## Answer:

```typescript
function make_shirt(size: string, message: string): void {
    console.log(`The shirt size is ${size} and the message printed on it is: "${message}"`);
}

// Call the function with sample arguments
make_shirt("Medium", "Code is Life");
make_shirt("Large", "Keep Calm and Code On");

```