// Array of guests to invite to dinner
var guestList = ["Iqbal", "Aslam", "Umar"];
// Print personalized invitations for the original guest list using forEach
console.log("Original Invitations:");
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", I would like to invite you to dinner."));
});
// One guest can't make it to dinner
console.log("".concat(guestList[1], " can't make it to dinner."));
// Use splice method to remove the guest who can't make it and add a new guest
guestList.splice(1, 1, "Ali");
// Print personalized invitations for the updated guest list using forEach
console.log("\nUpdated Invitations:");
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", I would like to invite you to dinner."));
});
