// Find the stray number
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3




function stray(numbers) {
  for(let i = 0; i < numbers.length; i++){
    if(numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) return numbers[i]
  }
}



// another way
// function stray(numbers){
//   const arr1 = []
//   const arr2 = []
//   const first = numbers.shift()
//   arr1.push(first)
//   numbers.forEach(number => {
//     if(!(arr1.includes(number))) arr2.push(number)
//     else arr1.push(number)
//   })
//   return arr1.length === 1 ? arr1[0] : arr2[0]
// }