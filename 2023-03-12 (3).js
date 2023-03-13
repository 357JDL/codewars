// Validate PIN code
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

//PARAMETERS: input string 'pin', a total count count=0, and a counter for only valid pins 'validCount=0', an object
//containing what the valid numbers are for a pin. it consists of the numbers 0-9
//RETURNS: if the total count and the valid count are both equal to 4 or 6, return true; otherwise false
//EXAMPLE: (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false
//PSEUDO CODE: set our counter variables count and validCount equal to 0; create our object 'numbers' with the properties
//0-9, all with a value of 0 to count each valid entry. take the input pin string and split it to analyze each number,
//then check if each character is in our object. if it is, validCount++. regardless if it is or not, count++. now check
//if both count and valid count is equal to 4 or 6, then we can return true. any other return is false


function validatePIN (pin) {
  let count = 0
  let validCount = 0
  const numbers = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0, 0:0}
    pin = pin.split('')
              .forEach(index => {
                if(index in numbers){
                  validCount++
                }
                count++
                })
  return (count === 4 && validCount === 4) || (count === 6 && validCount === 6) ? true : false
}