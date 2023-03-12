// Is the string uppercase?
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

//PARAMETERS: we create a parameter called "str" because our function will take in a string parameter
//RETURNS: returns true if the string parameter is in all caps; false if not
//EXAMPLES: "hello I AM DONALD" -> False,  "HELLO I AM DONALD" -> True
//PSEUDO CODE: make sure the parameter of the function is a string, then compare it to the uppercase version of
//the same string. if it is true, return true, otherwise return false



String.prototype.isUpperCase = function(str) {
  if(this.toString() === this.toUpperCase()) return true
  else return false
}