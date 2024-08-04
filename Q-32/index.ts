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
