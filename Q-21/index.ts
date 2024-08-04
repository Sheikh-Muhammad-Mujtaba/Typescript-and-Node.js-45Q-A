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
};

// Print the details of the favorite book
console.log("Favorite Book Details:");
console.log(`Title: ${favoriteBook.title}`);
console.log(`Author: ${favoriteBook.author}`);
console.log(`Year Published: ${favoriteBook.yearPublished}`);
console.log(`Genre: ${favoriteBook.genre}`);
