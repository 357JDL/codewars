// Mumbling
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z



function accum(s) {
  let output = []
  let sCopy = s.split('')
  for(let i = 0; i < sCopy.length; i++){
    let wordAccum = ''
    for(let j = 0; j <= i; j++){
      if(j === 0){
        wordAccum += sCopy[i].toUpperCase()
      } else {
        wordAccum += sCopy[i].toLowerCase()
      }
    }
    output.push(wordAccum)
  }
  return output.join('-')
}