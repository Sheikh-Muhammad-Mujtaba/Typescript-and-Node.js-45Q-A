# Q12:- Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

## Answer

```typescript
// Declare and initialize an array with friends' names
let myFriend: string[] = ["Ahmed", "Ali", "Umer"];

// Iterate over each element in the array and print it
for (let i = 0; i < myFriend.length; i++) {
  console.log(`Hello, ${myFriend[i]}! Hope you're having a great day!`); // Print the message to the person name at the current index
}

// Output: 

//  Hello, Ahmed! Hope you're having a great day!
//  Hello, Umer! Hope you're having a great day!
//  Hello, Ali! Hope you're having a great day!

```
