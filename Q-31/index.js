// Array of five or more usernames, including the name 'admin'
var usernames = ["admin", "john", "jane", "eric", "alice"];
usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    // Loop through the array and print a greeting to each user
    usernames.forEach(function (username) {
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    });
}
