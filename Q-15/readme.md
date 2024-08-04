# Q15:- Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

#### • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

#### • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

#### • Print a second set of invitation messages, one for each person who is still in your list.


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


// Output: 

// Original Invitations:
// Dear Iqbal, I would like to invite you to dinner.
// Dear Aslam, I would like to invite you to dinner.
// Dear Umar, I would like to invite you to dinner.

// Aslam can't make it to dinner.

// Updated Invitations:
// Dear Iqbal, I would like to invite you to dinner.
// Dear Ali, I would like to invite you to dinner.
// Dear Umar, I would like to invite you to dinner.


```
