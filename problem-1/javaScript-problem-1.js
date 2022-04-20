//Write a JavaScript function that takes in two parameters, 
//an array and a number (n), and return the first n elements of that array.

/*
Step 1: Create a JavaScript function that takes in two parameters.
Step 2: Create an array of strings. 
Step 3: Within the function use the slice() method to return the selected elements in
the array, as a new array.
*/
const arrayOfColors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];

function arraySort(array, num ) {
  //This constant will start at the first position in the array and end on the position
  //indicated by num.
  const newArray = arrayOfColors.slice(0, num);

  console.log(newArray);
  return array;
}

arraySort(arrayOfColors, 2);