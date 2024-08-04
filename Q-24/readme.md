# Q24:- More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

#### • Tests for equality and inequality with strings

#### • Tests using the lower case function

#### • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

#### • Tests using "and" and "or" operators

#### • Test whether an item is in a array

#### • Test whether an item is not in a array

## Answer:

 **tsconfig file include to configure module and target using `tsc --init` command, Here is some changes that i did in file:**
```json
 {
    "compilerOptions": {
"target": "ES2022",
"module": "NodeNext",
"moduleResolution": "NodeNext",
} 
 } 
```

### Tests for Equality and Inequality with Strings
```typescript
let car = 'subaru';
let city = 'New York';
let age = 25;
let numberList = [1, 2, 3, 4, 5];

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True

console.log("Is car != 'honda'? I predict True.");
console.log(car != 'honda'); // True

console.log("Is city == 'new york'? I predict False.");
console.log(city == 'new york'); // False

console.log("Is city.toLowerCase() == 'new york'? I predict True.");
console.log(city.toLowerCase() == 'new york'); // True
```

### Tests Using the Lower Case Function
```typescript
console.log("Is city.toLowerCase() == 'new york'? I predict True.");
console.log(city.toLowerCase() == 'new york'); // True

console.log("Is city.toLowerCase() == 'NEW YORK'? I predict True.");
console.log(city.toLowerCase() == 'NEW YORK'.toLowerCase()); // True
```

### Numerical Tests Involving Equality and Inequality, Greater Than and Less Than, Greater Than or Equal To, and Less Than or Equal To
```typescript
console.log("Is age == 25? I predict True.");
console.log(age == 25); // True

console.log("Is age != 30? I predict True.");
console.log(age != 30); // True

console.log("Is age > 20? I predict True.");
console.log(age > 20); // True

console.log("Is age < 30? I predict True.");
console.log(age < 30); // True

console.log("Is age >= 25? I predict True.");
console.log(age >= 25); // True

console.log("Is age <= 25? I predict True.");
console.log(age <= 25); // True

console.log("Is age < 20? I predict False.");
console.log(age < 20); // False

console.log("Is age > 30? I predict False.");
console.log(age > 30); // False

console.log("Is age >= 30? I predict False.");
console.log(age >= 30); // False

console.log("Is age <= 20? I predict False.");
console.log(age <= 20); // False
```

### Tests Using "and" and "or" Operators
```typescript
console.log("Is car == 'subaru' and city == 'New York'? I predict True.");
console.log(car == 'subaru' && city == 'New York'); // True

console.log("Is car == 'subaru' or city == 'Los Angeles'? I predict True.");
console.log(car == 'subaru' || city == 'Los Angeles'); // True

console.log("Is car == 'honda' and city == 'New York'? I predict False.");
console.log(car == 'honda' && city == 'New York'); // False

console.log("Is car == 'subaru' or city == 'Los Angeles'? I predict True.");
console.log(car == 'subaru' || city == 'Los Angeles'); // True
```

### Test Whether an Item is in an Array
```typescript
console.log("Is 3 in numberList? I predict True.");
console.log(numberList.includes(3)); // True
```

### Test Whether an Item is Not in an Array
```typescript
console.log("Is 6 in numberList? I predict False.");
console.log(numberList.includes(6)); // False

console.log("Is 6 not in numberList? I predict True.");
console.log(!numberList.includes(6)); // True
```

