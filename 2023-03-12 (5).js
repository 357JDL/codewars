// Is it even?
// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).
// The function needs to return either a true or false.
// Numbers may be positive or negative, integers or floats.
// Floats with decimal part non equal to zero are considered UNeven for this kata.

//PARAMETERS: input 'n' that is a number
//RETURNS: true or false depending on if the input is even. it must be completely even and leave no decimal
//EXAMPLE: 10 is even because 10%2=0, so it should return true. 5.5%2=1.5, returns false
//PSEUDO CODE: test to see if n%2 === 0; if it is true, return true; otherwise return false


function testEven(n) {
  return n % 2 === 0 ? true : false
}