var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Function to create a car object
function createCar(manufacturer, model, additionalInfo) {
    // Create the car object with required properties
    var car = __assign({ manufacturer: manufacturer, model: model }, additionalInfo // Spread the additional properties
    );
    return car;
}
// Example usage of the function
var car1 = createCar('Toyota', 'Corolla', { color: 'blue', year: 2020 });
var car2 = createCar('Honda', 'Civic', { color: 'red', sunroof: true });
// Print the car objects to verify the information
console.log(car1);
console.log(car2);
