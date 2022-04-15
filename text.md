Prompt #4: Checking for Uniqueness

Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

Example
Input: "hello"
Output: false
Input: "copyright"
Output: true

//always a string
//cannot convert into an array
//return true or false

//sets contain unique values

//creating a new set passing inputted string into the set.
//compared set with the string in it, to the original inputted string
//which returns true if the original string is equal to the set with the string in it.

function unique(str) {
  let set = new Set(str); <--- "hello" turns into "helo"
  if (set.size != str.length) { //compares length of both original string to the set string
  return false; //if not equal lengths
  }
  return true; //if they are equal lengths then it returns true.
}

final comment for submission!