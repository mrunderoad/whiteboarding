//NOTES FOR WHITEBOARDING FRIDAY PROJECT 4/15/22

//! Question #1: Turning Strings to URLs
//! URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

//! You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

//! Example
//! Input: "Jasmine Ann Jones"

//! Output: "Jasmine%20Ann%20Jones"

//First step would be to detect the blank spaces.
//Second step would be to push the string together to remove spaces

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

//EX: let str = "This will have %20 replacing spaces."
//Return: "This%20will%20have%20%20%20replacing%20spaces."


