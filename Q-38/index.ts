function describe_city(city: string, country: string = "Pakistan"): void {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities, including one not in the default country
describe_city("Karachi"); // Uses default country
describe_city("Lahore"); // Uses default country
describe_city("New York", "USA"); // Uses specified country
