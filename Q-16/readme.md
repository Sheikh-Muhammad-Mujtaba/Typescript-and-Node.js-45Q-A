# Q16:- More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

#### • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

#### • Add one new guest to the beginning of your array.

#### • Add one new guest to the middle of your array.

#### • Use append() to add one new guest to the end of your list.

#### • Print a new set of invitation messages, one for each person in your list.

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

```