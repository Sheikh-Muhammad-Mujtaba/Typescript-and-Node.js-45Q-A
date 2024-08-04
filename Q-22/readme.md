# Q21:- Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

## Answer
```typescript
// Array of favorite books
let favoriteBooks: string[] = ["To Kill a Mockingbird", "1984", "The Great Gatsby", "Pride and Prejudice"];

// Print a message about the list
console.log("These are my favorite books:");

// Intentionally accessing an out-of-bounds index to cause an error
// This will cause an index error because the array has only 4 elements (indices 0 to 3)
console.log(favoriteBooks[4]); 

// Correctly accessing an existing index in the array
console.log(favoriteBooks[1]); // This will print "1984" which is at index 1

// Output

// These are my favorite books:
// undefined
// 1984


```