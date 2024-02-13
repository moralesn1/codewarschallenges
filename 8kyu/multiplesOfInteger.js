/* In this simple exercise, you will build a program that takes a value, integer , and returns a 
list of its multiples up to another value, limit . If limit is a multiple of integer, it should 
be included as well. There will only ever be positive integers passed into the function, not 
consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, 
and 6 are the multiples of 2 up to 6.
*/

function findMultiples(integer, limit) {
    let resultsArray = []
    let multiplesOfInteger;
    
    for (let i = 1; i <= limit; i++) {
        multiplesOfInteger = i * integer
      if (multiplesOfInteger <= limit) {
        resultsArray.push(integer * i)
      } else {
        return resultsArray
      }
    }
    return resultsArray
}
  

function findMultiples(integer, limit) {
    let resultsArray = []

    for (let i = integer; i <= limit; i+=integer) {
        resultsArray.push(i)
    }
    return resultsArray
}
  