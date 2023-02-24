// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

function towerBuilder(nFloors) {
    let rowOutput = []
    let numStars = 1
    for(let row = 1; row <= nFloors; row++){
      let output = ''
      for(let i = nFloors-row; i > 0; i--){
        output += ' '
      }
      for(let j = 0; j < numStars; j++){
        output += '*'
      }
      for(let i = nFloors-row; i > 0; i--){
        output += ' '
      }
      rowOutput.push(output)
      numStars += 2
    }
    return rowOutput
  }