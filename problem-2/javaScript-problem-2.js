//Define a function that takes in an array of elements and joins them together into a 
//string separated by a comma with a space after the comma.


/*
Step 1: Create a function that takes in an array of elements. 
Step 2: Define an array of elements.
Step 3: Use the join method to join the elements together into a string separated 
by a comma with a space after the comma. 
*/

const seasons = ["Spring", "Summer", "Autumn", "Winter"];

function arrayJoin (array) {
  
  const string = array.join(", ");
  
  if( array === null) {
    return "Please enter an array of elements to run this function";
  }
  
  console.log(string);
  return string;
}

arrayJoin(seasons);