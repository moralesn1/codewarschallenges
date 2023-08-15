function findOdd(A) {
  const frequencyCounter = {}
  
  for (let val of A) {
    frequencyCounter[val] = (frequencyCounter[val] || 0) + 1
  }
  
  for (const [key, value] of Object.entries(frequencyCounter)) {
    if (value % 2 !== 0) {
      return parseInt(key)
    }
  }

}