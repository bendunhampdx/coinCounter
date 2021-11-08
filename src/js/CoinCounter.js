export const coinCounter = (money, i = 0, changeArray = []) => {
  const coinValues = [25, 10, 5, 1]
  if (money > 0) {
    if (money >= coinValues[i]) {
      const newAmt = (money -= coinValues[i])
      const addChange = [coinValues[i]]
      const newChange = changeArray.concat(addChange)
      return coinCounter(newAmt, i, newChange)
    } else {
      return coinCounter(money, i += 1, changeArray)
    }
  } else {
    const quarterArray = changeArray.filter(e => e === 25)
    const dimesArray = changeArray.filter(e => e === 10)
    const nickelsArray = changeArray.filter(e => e === 5)
    const penniesArray = changeArray.filter(e => e === 1)
    return `Your change is ${quarterArray.length} quarters, ${dimesArray.length} dimes, ${nickelsArray.length} nickels, ${penniesArray.length} pennies`; 
  }
}

