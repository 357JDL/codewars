// Counting sheep...
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

//PARAMETERS: INPUT ARRAY 'arrayOfSheep', counter named count
//RETURNS: returns the count of 'true' booleans in the array
//EXAMPLES: [true, true, false] returns 2
//PSEUDO CODE: we declare a counter variable count = 0 to keep track of our count, then loop through the entire array
//and check if the element is equal to true; if true, count++. after the loop is complete, return count


function countSheeps(arrayOfSheep) {
    let count = 0
    arrayOfSheep.forEach(sheep => {
      if(sheep === true) count++
    })
    return count
  }