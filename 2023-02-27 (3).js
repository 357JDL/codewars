// Twice as old
// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.


function twiceAsOld(dadYearsOld, sonYearsOld) {
  let counter = 0
  if(sonYearsOld*2 === dadYearsOld) return counter
  else if(sonYearsOld*2 < dadYearsOld){
    while((sonYearsOld*2) !== dadYearsOld){
      sonYearsOld +=1
      dadYearsOld += 1
      counter += 1
    }
  } else {
    while((sonYearsOld*2) !== dadYearsOld){
      sonYearsOld -=1
      dadYearsOld -= 1
      counter += 1
    }
  }
  return counter
}