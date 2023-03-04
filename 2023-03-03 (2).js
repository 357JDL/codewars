//Convert number to reversed array of digits
//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]


function digitize(n) {
    const arr = []
    const nString = n.toString()
    for(let i = nString.length - 1; i >= 0; i--){
      arr.push(Number(nString[i]))
    }
    return arr
  }