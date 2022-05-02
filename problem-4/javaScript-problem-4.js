//Write a JavaScript function to remove duplicate items from an array 

/*
Step 1: Create a function that will take in an array of elements. 
Step 2: Create an array of elements.
Step 3: Use create a for loop that will loop through each array element for uniqueness.
Step 4: Using both includes() & push() will remove any duplicate items in the original 
array.
Step 5:Print the new array into an empty array variable.
*/

const arrayOfValues = ["Rock", "Paper", "Scissors", "Rock", "Paper", "Paper"];

function dupArrayRemover(array) {
  let newArray = [];
  
  for(let i = 0; i < array.length; i++) {
    
    if(!newArray.includes(array[i])) {
      newArray.push(array[i])
    };
    
  };
  
  return newArray;
};

console.log(dupArrayRemover(arrayOfValues));