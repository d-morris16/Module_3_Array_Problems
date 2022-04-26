//Write a JavaScript function to remove duplicate items from an array 

/*
Step 1: Create a function that will take in an array of elements. 
Step 2: Create an array of elements.
Step 3: Use the filter() method to reduce the duplicate items from the array. 
*/

const arrayOfStrings = ["Rock", "Paper", "Scissors", "Rock", "Paper", "Paper"];

function arrayFilter(array) {
  //We arrow function into the indexOf function to have it only accept the first 
  //occurance of the array element.
  array.filter((item, index) => array.indexOf(item) === index);
  return array;
}
              
console.log(arrayFilter(arrayOfStrings));