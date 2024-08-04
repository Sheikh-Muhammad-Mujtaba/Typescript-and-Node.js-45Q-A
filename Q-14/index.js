// Array of guests to invite to dinner
var guestList = ["Iqbal", "Aslam", "Umar"];
// Loop through the array and print personalized invitations
guestList.forEach(function (invitation) {
    console.log("Dear ".concat(invitation, ", I would like to invite you to dinner."));
});
