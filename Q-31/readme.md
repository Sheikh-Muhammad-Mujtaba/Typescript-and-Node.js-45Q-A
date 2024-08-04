# Q31:- No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.

#### • If the list is empty, print the message We need to find some users!

#### • Remove all of the usernames from your array, and make sure the correct message is printed.

## Answer

```typescript
// Array of five or more usernames, including the name 'admin'
let usernames: string[] = ["admin", "john", "jane", "eric", "alice"];

// The following line is to assign an empty array and check the "no users" message
usernames = [];

// Check if the usernames array is empty and print a message if true
if (usernames.length === 0) {
    console.log("We need to find some users!");
} else {
    // Loop through the array and print a greeting to each user
    usernames.forEach(username => {
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    });
}

```