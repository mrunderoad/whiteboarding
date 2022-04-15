//NOTES FOR WHITEBOARDING FRIDAY PROJECT 4/15/22

//! Question #1: Turning Strings to URLs
//! URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

//! You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

//! Example
//! Input: "Jasmine Ann Jones"

//! Output: "Jasmine%20Ann%20Jones"

//First step would be to detect the blank spaces.
//Second step would be to push the string together to remove spaces

//!using .replaceAll();
function replaceSpace(str) {
  const replaced = str.replaceAll(' ','20%');
  return replaced;
}
//using .replaceAll(); too similar to .replace();? i think yes.

function replaceString(str) {
  const space = ' ';
  const replaceWith = '%20';
  const result = str.split(space).join(replaceWith);
  return result;
}
//here we first define a space. Knowing that it is a blank space we are able to then define a variable 'replaceWith' that is set to the 20% that we want to replace the space with. We then set a result that is splitting the string at the spaces and rejoining them with the variable 'replaceWith'. Then we return the result to get a string with spaces replaces with %20.

//!refactored
function replaceString(str) {
  const result = str.split(' ').join('%20');
  return result;
}
//EX: let str = "This will have %20 replacing spaces."
//Return: "This%20will%20have%20%20%20replacing%20spaces."

//?------------------------------------------------------------

//! Question #2: Array Deduping
//! Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

//! Example
//! Input: [7, 9, "hi", 12, "hi" 7, 53]
//! Output: [7, 9, "hi", 12, 53]

let arr = ['a', 'a', 'a', 'b', 'c', 'hi', 'hi', 'bye', 'hello', 'hello'];
let doubledArr = [];
arr.forEach((x) => {
  if (!doubledArr.includes(x)) {
    doubledArr.push(x);
  }
});
console.log(doubledArr);

//in this example we first declare two variables, arr and doubledArr. arr holds our input, and doubledArr is an empty array for us to push the result into. We then run the arr through a foreach given x, which is representing the items in the array. from then we check if doubledArr does not include x. if it does not, then we push x into the doubledArr

//EX: this algorithm returns 'a', 'b', 'c', 'hi', 'bye', 'hello'
//! using .filter()

function deduping(arr) {
  return arr.filter((value, index) => arr.indexOf(value) === index);
}
//here we are filtering through an array, which the filter method creates a new array of elements that pass the conditional we provided. Any elements that fail/return false will not be filtered.

//! using sets

l//* let arr = [4, 6, 4, 3, 3, 4]
function deduping(arr) {
  let set = new Set(arr);
  return set;
}
//here we are creating a set, which only contain unique values.

//?--------------------------------------------------------------

//! Question #3: Compressing Strings
//! Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

//! Example
//! Input: "aaabccdddda"
//! Output: "3ab2c4da"

function compressingStrings(str) {
  let result = ' ';
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count++ //each time the character is repeated it increments.
    if (str[i] != str[i+1]) { //if string at 1 is not equal to string at 2 it preforms the code below
      result += count + str[i]; //concatenating the string together
      count = 0;
    }
  }
  return result;
}

//Here we set an empty string as the result, set a counter to count the times a number or letter occurs in the string we are passing into the function. We then set a counter to count how many times it the number or letter occurs in the string. We then run the string through a loop an compare the current and next characters. If both the characters are not the same we then increment the count by 1 and do a string concatenation.

//?--------------------------------------------------------------

//! Question #4: Checking for Uniqueness
//! Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

//! Example
//! Input: "hello"
//! Output: false
//! Input: "copyright"
//! Output: true
