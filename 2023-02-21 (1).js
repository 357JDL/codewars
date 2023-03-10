// Vowel Count
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
  const vowels = {a:'a', e:'e', i:'i', o:'o', u:'u'}
  let count = 0
  str.split('').forEach(letter => {
    if(letter === vowels[letter]) count += 1
  })
  return count
}
