# Q6:- Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.


## Answer
```typescript
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
// Output: "Muhammad Ahmed"

```
