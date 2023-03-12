// Reversed sequence
// Build a function that returns an array of integers from n to 1 where n>0.


//PARAMETERS: integer 'n' that is passed in, array 'answer' to store count down results
//RETURN: 'answer' array of results
//EXAMPLE: n=5 --> [5,4,3,2,1]
//PSEUDO CODE: create empty array that we will push results to, creat for loop starting at n because it will be
//the highest value, and then we will count down to 1, return the resulting array of values from n to 1


const reverseSeq = n => {
  const answer = []
  for(let i = n; i > 0; i--){
    answer.push(i)
  }
  return answer
};