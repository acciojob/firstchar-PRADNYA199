function firstChar(text) {
  // your code here
	 for (let i = 0; i < text.length; i++) {
    // Check if the character is not a space
    if (text[i] !== ' ') {
      return text[i];
    }
  }
  // If no non-space character is found, return an empty string
  return '';
}

// Correct way to handle the prompt and pass text to the function
const text = prompt("Enter text:"); // Get input from the user
alert(firstChar(text)); 