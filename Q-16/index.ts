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
