# Q32:- Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

#### • Make a list of five or more usernames called current_users.

#### • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

#### • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

#### • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

## Answer:


 **tsconfig file include to configure module and target using `tsc --init` command, Here is some changes that i did in file:**
```json
 {
    "compilerOptions": {
"target": "ES2022",
"module": "NodeNext",
"moduleResolution": "NodeNext",
} 
 } 
```

### Test to see if each new username has already been used or not
```typescript
// List of current usernames
let current_users: string[] = ["admin", "john", "jane", "eric", "alice"];

// List of new usernames to be checked
let new_users: string[] = ["John", "Alice", "mike", "susan", "tom"];

// Convert all current usernames to lowercase for case-insensitive comparison
let current_users_lowercase: string[] = current_users.map(user => user.toLowerCase());

// Loop through the new_users list to check availability
new_users.forEach(new_user => {
    // Convert the new username to lowercase for comparison
    let new_user_lowercase = new_user.toLowerCase();

    if (current_users_lowercase.includes(new_user_lowercase)) {
        console.log(`The username "${new_user}" is already taken. Please enter a new username.`);
    } else {
        console.log(`The username "${new_user}" is available.`);
    }
});

```