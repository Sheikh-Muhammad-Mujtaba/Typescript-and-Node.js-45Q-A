let car = 'subaru';
let city = 'New York';
let age = 25;
let numberList = [1, 2, 3, 4, 5];

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car != 'honda'? I predict True.");
console.log(car != 'honda');

console.log("Is city == 'new york'? I predict False.");
console.log(city == 'new york');

console.log("Is city.toLowerCase() == 'new york'? I predict True.");
console.log(city.toLowerCase() == 'new york');

console.log("Is age == 25? I predict True.");
console.log(age == 25);

console.log("Is age != 30? I predict True.");
console.log(age != 30);

console.log("Is age > 20? I predict True.");
console.log(age > 20);

console.log("Is age < 30? I predict True.");
console.log(age < 30);

console.log("Is age >= 25? I predict True.");
console.log(age >= 25);

console.log("Is age <= 25? I predict True.");
console.log(age <= 25);

console.log("Is age < 20? I predict False.");
console.log(age < 20);

console.log("Is age > 30? I predict False.");
console.log(age > 30);

console.log("Is age >= 30? I predict False.");
console.log(age >= 30);

console.log("Is age <= 20? I predict False.");
console.log(age <= 20);

console.log("Is car == 'subaru' and city == 'New York'? I predict True.");
console.log(car == 'subaru' && city == 'New York');

console.log("Is car == 'subaru' or city == 'Los Angeles'? I predict True.");
console.log(car == 'subaru' || city == 'Los Angeles');

console.log("Is car == 'honda' and city == 'New York'? I predict False.");
console.log(car == 'honda' && city == 'New York');

console.log("Is car == 'subaru' or city == 'Los Angeles'? I predict True.");
console.log(car == 'subaru' || city == 'Los Angeles');

console.log("Is 3 in numberList? I predict True.");
console.log(numberList.includes(3));

console.log("Is 6 in numberList? I predict False.");
console.log(numberList.includes(6));

console.log("Is 3 not in numberList? I predict False.");
console.log(!numberList.includes(3));

console.log("Is 6 not in numberList? I predict True.");
console.log(!numberList.includes(6));
