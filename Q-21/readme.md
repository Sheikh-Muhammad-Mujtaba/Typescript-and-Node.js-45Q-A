# Q21:- They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

## Answer
```typescript
// Define the Book interface
interface Book {
    title: string;
    author: string;
    yearPublished: number;
    genre: string;
}

// Create an object representing a favorite book
let favoriteBook: Book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    yearPublished: 1960,
    genre: "Fiction"
};s

// Print the details of the favorite book
console.log("Favorite Book Details:");
console.log(`Title: ${favoriteBook.title}`);
console.log(`Author: ${favoriteBook.author}`);
console.log(`Year Published: ${favoriteBook.yearPublished}`);
console.log(`Genre: ${favoriteBook.genre}`);

// Output

// Favorite Book Details:
// Title: To Kill a Mockingbird
// Author: Harper Lee
// Year Published: 1960
// Genre: Fiction
```