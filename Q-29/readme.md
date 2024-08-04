# Q29:- Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

#### • Make a array of your three favorite fruits and call it favorite_fruits.

#### • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

## Answer
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
### Favorite Fruit

```typescript
// Makeing an array of your three favorite fruits and calling it favorite_fruits
let favorite_fruits: string[] = ["apple", "banana", "mango"];

// if statements to check for certain fruits in the array
if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!");
}

if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}

if (favorite_fruits.includes("mango")) {
    console.log("You really like mangoes!");
}

if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!");
}

if (favorite_fruits.includes("grape")) {
    console.log("You really like grapes!");
}
```
