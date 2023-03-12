// Descending Order
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321

//PARAMETERS: input 'n'
//RETURNS: 'n'as a number, not string
//EXAMPLES: Input: 123456789 Output: 987654321
//PSEUDO CODE: convert 'n' to a string so we can split it into separate numbers, then use split to make an array of each#
//then convert each index to a number because they are strings. then sort the array into descending order using sort.
//then join back into a single string after it has been sorted. return the final string as a number


function descendingOrder(n){
  n = n.toString().split('')
    .map(index => Number(index))
    .sort((a, b) => {
      if(a < b) return 1
      else if(a > b) return -1
      else return 0
    })
    .join('')
  return Number(n)
}