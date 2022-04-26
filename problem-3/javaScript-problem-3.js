//Define a function that takes in an array of numbers/integers and returns the 
//sorted version of that array, greatest to least.

/*
Step 1: Create the function that will take in array of numbers/integers.
Step 2: Define an array of numbers/integers in any order.
Step 3: Use the sort method to sort the array elements in order from greatest to least.
*/

const arrayOfNum = [35, 59, -48, -3, 89, -2, 0];

function numberSort (array) {
  
 if (array === null) {
    return "Please input an array for the function to sort";
  }
   //In order to get the sort method to correctly sort the integers, we need to use the 
  //compareFunction to compare the values from greater or less. 
  console.log(array.sort(function(a, b){return b-a}));
}

numberSort(arrayOfNum);