# Q17:- Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

#### • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

#### • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

#### • Print a message to each of the two people still on your list, letting them know they’re still invited.

#### • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

## Answer
```typescript
// Array of guests to invite to dinner
let guestList: string[] = ["Iqbal", "Aslam", "Umar"];

// Print personalized invitations for the original guest list using forEach
console.log("Original Invitations:");
guestList.forEach(guest => {
    console.log(`Dear ${guest}, I would like to invite you to dinner.`);
});

// One guest can't make it to dinner
console.log(`${guestList[1]} can't make it to dinner.`);

// Use splice method to remove the guest who can't make it and add a new guest
guestList.splice(1, 1, "Ali");

// Print personalized invitations for the updated guest list using forEach
console.log("\nUpdated Invitations:");
guestList.forEach(guest => {
    console.log(`Dear ${guest}, I would like to invite you to dinner.`);
});

// Inform about finding a bigger dinner table
console.log("\nGreat news! We found a bigger dinner table.");

// Add a new guest to the beginning of the array
guestList.unshift("Sarah");

// Add a new guest to the middle of the array
const middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Mona");

// Append a new guest to the end of the array
guestList.push("Ahmed");

// Print new set of invitation messages
console.log("\nFinal Updated Invitations:");
guestList.forEach(guest => {
    console.log(`Dear ${guest}, I would like to invite you to dinner.`);
});

// Print message about the new limitation
console.log("\nUnfortunately, due to the smaller table, we can only invite two people for dinner.");

// Remove guests until only two remain
while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    if (removedGuest !== undefined) {
        console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
    }
}

// Print invitations for the remaining two guests
console.log("\nUpdated Invitations for the two remaining guests:");
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
});

// Remove the last two names from the list
guestList.pop(); // Remove one
guestList.pop(); // Remove the other

// Print the empty list
console.log("\nFinal guest list:", guestList);


// Output

// Original Invitations:
// Dear Iqbal, I would like to invite you to dinner.
// Dear Aslam, I would like to invite you to dinner.
// Dear Umar, I would like to invite you to dinner.

// Aslam can't make it to dinner.

// Updated Invitations:
// Dear Iqbal, I would like to invite you to dinner.
// Dear Ali, I would like to invite you to dinner.
// Dear Umar, I would like to invite you to dinner.

// Great news! We found a bigger dinner table.

// Final Updated Invitations:
// Dear Sarah, I would like to invite you to dinner.
// Dear Iqbal, I would like to invite you to dinner.
// Dear Mona, I would like to invite you to dinner.
// Dear Ali, I would like to invite you to dinner.
// Dear Umar, I would like to invite you to dinner.
// Dear Ahmed, I would like to invite you to dinner.

// Unfortunately, due to the smaller table, we can only invite two people for dinner.

// Sorry Ahmed, we can't invite you to dinner.
// Sorry Umar, we can't invite you to dinner.
// Sorry Ali, we can't invite you to dinner.
// Sorry Mona, we can't invite you to dinner.

// Updated Invitations for the two remaining guests:
// Dear Sarah, you are still invited to dinner.
// Dear Iqbal, you are still invited to dinner.

// Final guest list: []

```