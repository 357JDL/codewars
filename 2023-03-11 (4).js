// Beginner Series #1 School Paperwork
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0

//PARAMETERS: n, m (input parameters)
//RETURNS: as long as our parameters are positive, return n * m
//EXAMPLES: // n= 5, m=5: 25
//PSEUDO CODE: check if either of our parameters are negative. if so, return 0 per assignment request
//otherwise, return n * m



function paperwork(n, m) {
  if(n<0 || m<0) return 0
  return n*m
}