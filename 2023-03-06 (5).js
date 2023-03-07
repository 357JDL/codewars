// Your order, please
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// PREP
//P: PARAMETERS - one - take in a string multiple words
//R: RETURN - output the same string retaining spaces, but rearranging based on numbers existing in the string
//E: EXAMPLES - "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
//P: PSEUDO CODE
// split the string via spaces
// then split each word into char
// check char if typeof(char) is 'number'
// if true, push to wordTrackerArr the number
// use outputArr and assign word based on wordTrackerArr
// return string based on wordTrackerArr


function order(words){
    let array = words.split(' ');
    let sortedArray = [];
    for(i = 0; i <= array.length; i++) {
        for(j = 0; j < array.length; j++) {
            if(array[j].indexOf(i) >= 0) {
                sortedArray.push(array[j]);
            }
        }
    }
    return sortedArray.join(' ');
  }