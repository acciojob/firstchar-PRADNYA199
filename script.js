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

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
