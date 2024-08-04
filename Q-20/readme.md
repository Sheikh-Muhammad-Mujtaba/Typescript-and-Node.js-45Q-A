# Q20:- Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

## Answer
```typescript
// Making a favorite books ARRAY:
let favoriteBooks: string[] = ["To Kill a Mockingbird", "1984", "The Great Gatsby", "Pride and Prejudice"];

// Print the message about the list
console.log("These are my favorite books that I would love to read again:");

// Print the value of the array in the form of a list:
favoriteBooks.forEach(book => {
    console.log(book);
});

// Output

// These are my favorite books that I would love to read again:
// To Kill a Mockingbird
// 1984
// The Great Gatsby
// Pride and Prejudice
```