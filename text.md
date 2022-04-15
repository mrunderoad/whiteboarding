//! Question #4: Checking for Uniqueness
//! Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

//! Example
//! Input: "hello"
//! Output: false
//! Input: "copyright"
//! Output: true

function unique(str) {
  //using sets (collection of unique values that can be any data type)
  let set = net Set(str);
  if (set.size != str.length) {
    //set will have removed all characters that are duplicates
    return false;
  }
  return true;
}

function unique(str) {
  let set = new Set(str); <-- "hello" set will change this to "helo"
  if (set.size != str.length) { <-- if the set size is NOT equal to the original str length, return false
    return false;
  }
  return true; <-- if the set size is the same as the original string it returns true!
}
