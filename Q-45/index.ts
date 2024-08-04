// Define the interface for the car object
interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;  // Index signature to accept arbitrary properties
}

// Function to create a car object
function createCar(manufacturer: string, model: string, additionalInfo?: { [key: string]: any }): Car {
    // Create the car object with required properties
    const car: Car = {
        manufacturer,
        model,
        ...additionalInfo  // Spread the additional properties
    };
    
    return car;
}

// Example usage of the function
const car1 = createCar('Toyota', 'Corolla', { color: 'blue', year: 2020 });
const car2 = createCar('Honda', 'Civic', { color: 'red', sunroof: true });

// Print the car objects to verify the information
console.log(car1);
console.log(car2);
