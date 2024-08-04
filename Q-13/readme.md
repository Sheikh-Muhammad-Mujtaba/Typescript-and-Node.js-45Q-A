# Q13:- Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”


## Answer

```typescript
// Array of favorite modes of transportation
let transportation: string[] = ["Tesla car", "Yamaha motorcycle", "Giant bicycle"];

// Loop through the array and print personalized statements
transportation.forEach(item => {
    console.log(`I would like to own a ${item}.`);
});

// Output: 

// I would like to own a Tesla car.
// I would like to own a Yamaha motorcycle.
// I would like to own a Giant bicycle.

```
