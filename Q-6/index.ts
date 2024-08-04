// Store a person's name with leading and trailing whitespace characters, including tabs and newlines
let nameWithWhitespace: string = "\n\t Muhammad Ahmed \t\n";

// Print the name with whitespace to show the extra spaces
console.log(nameWithWhitespace);
// Output will include newlines and tabs, so it may appear as follows:
// 
//	
//  Muhammad Ahmed 	
// 

// Remove the leading and trailing whitespace characters from the name
let nameWithoutWhitespace: string = nameWithWhitespace.trim();

// Print the name after stripping the whitespace
console.log(nameWithoutWhitespace);
