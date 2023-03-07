// Reverse words
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    //PREP
    //P: PARAMETERS - one - take in a string
    //R: RETURN - output the same string in reverse, retaining spaces
    //E: EXAMPLES - 'hello world' => 'olleh dlrow'
    //P: PSEUDO CODE
    //take in the string we get and split by spaces
    //run the reverse method on each word
    //join the string back together with a space
    //return the string
    str = str.split(' ')
    for(let i = 0; i < str.length; i++){
      str[i] = str[i].split('').reverse().join('')
    }
    return str.join(' ')
  }