# Q14:- Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.


## Answer

```typescript
// Array of guests to invite to dinner
let guestList: string[] = ["Iqbal", "Aslam", "Umar"];

// Loop through the array and print personalized invitations
guestList.forEach(invitation =>{
    console.log(`Dear ${invitation}, I would like to invite you to dinner.`);
})

// Output: 

// Dear Iqbal, I would like to invite you to dinner.
// Dear Aslam, I would like to invite you to dinner.
// Dear Umar, I would like to invite you to dinner.


```
