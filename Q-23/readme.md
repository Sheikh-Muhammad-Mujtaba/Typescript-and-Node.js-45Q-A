# Q23:- Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

``` typescript
let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')
```

#### • Look closely at your results, and make sure you understand why each line evaluates to True or False.

#### • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

## Answer:
```typescript
// Define variables to be tested
let person = 'ahmed';
let age = 25;
let city = 'New York';
let temperature = 30;
let isRaining = false;

// Conditional Tests

// Tests expected to evaluate to True
console.log("Is car == 'subaru'? I predict True.");
console.log(person == 'ahmed');

console.log("Is age > 20? I predict True.");
console.log(age > 20);

console.log("Is city == 'New York'? I predict True.");
console.log(city == 'New York');

console.log("Is temperature < 40? I predict True.");
console.log(temperature < 40);

console.log("Is isRaining == false? I predict True.");
console.log(isRaining == false);

// Tests expected to evaluate to False
console.log("Is car == 'honda'? I predict False.");
console.log(person == 'hamza');

console.log("Is age < 20? I predict False.");
console.log(age < 20);

console.log("Is city == 'Los Angeles'? I predict False.");
console.log(city == 'Los Angeles');

console.log("Is temperature > 40? I predict False.");
console.log(temperature > 40);

console.log("Is isRaining == true? I predict False.");
console.log(isRaining != false);

// Output

// Is car == 'subaru'? I predict True.
// true
// Is age > 20? I predict True.
// true
// Is city == 'New York'? I predict True.
// true
// Is temperature < 40? I predict True.  
// true
// Is isRaining == false? I predict True.
// true
// Is car == 'honda'? I predict False.   
// false
// Is age < 20? I predict False.
// false
// Is city == 'Los Angeles'? I predict False.
// false
// Is temperature > 40? I predict False.
// false
// Is isRaining == true? I predict False.
// false
```