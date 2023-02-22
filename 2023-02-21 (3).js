// Sort the odd
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]



function sortArray(array) {
  let oddOnly = array.filter(n => n%2!==0) //[3, 5]
  oddOnly.sort((a, b) => {
    if(a > b) return 1
    else if (b > a) return -1
    else return 0
  })
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 !== 0){ //if index is odd, replace from oddOnly array
      array[i] = oddOnly[0]
      oddOnly.shift()
    }
  }
  return array
}