export const findMinRate = (
  rates: Record<string, Record<string, number>>,
  currencies: string[],
): number | null => {
  let minRate = Number.MAX_VALUE

  currencies.forEach((currency) => {
    Object.keys(rates).forEach((key) => {
      const pair = rates[key][currency]
      if (pair < minRate) {
        minRate = pair
      }
    })
  })

  return minRate !== Number.MAX_VALUE ? minRate : null
}
