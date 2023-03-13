// Return Negative
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.


//PARAMETERS: our input 'num' which is a number
//RETURNS: IF THE NUMBER IS <=0, JUST RETURN THE NUMBER. otherwise multiply by -1 to make it negative
//EXAMPLE: makeNegative(1);    // return -1
//PSEUDO CODE: check if the number is greater than 0. if it is, multiply by -1 and return the value; otherwise return
//the num as is


function makeNegative(num) {
  return num > 0 ? num*(-1) : num
}