// Detect Pangram
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

//PARAMETERS: input string, counter, alphabet object containing each letter of alphabet as the property and 0 as initial value
//RETURNS: if counter is 26, return true because alphabet contains 26 letters
//EXAMPLES: 'abcdefghijklmnopqrstuvwxyz' contains 1 of each letter, so looping through alphabet object should result in
//count=26, so it returns true
//PSEUDO CODE: not case sensitive, so make the input string lowercase, then split string into an array of letters
//using 'forEach' we check if each letter is in alphabet. if true, +1 to alphabet[letter]. then loop through alphabet
//object to check if every letter is used (value>=1) and if true, count++. if every letter has a value >= 1, then
//count===26. if so, return true. otherwise return false


function isPangram(string){
  let count = 0
  const alphabet = {a:0, b:0, c:0, d:0, e:0, f:0, g:0, h:0, i:0, j:0,
                   k:0, l:0, m:0, n:0, o:0, p:0, q:0, r:0, s:0, t:0,
                   u:0, v:0, w:0, x:0, y:0, z:0}
  string.toLowerCase().split('').forEach(letter => {
    if(letter in alphabet) alphabet[letter]++
  })
  for(let letter in alphabet){
    if(alphabet[letter] >= 1){
      count++
    }
  }
  return count === 26 ? true : false
}