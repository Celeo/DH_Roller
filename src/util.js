import secureRandom from 'secure-random'


export const getRoll = (max) => {
  let numbers, number
  while (true) {
    numbers = secureRandom(10)
    for (number of numbers) {
      if (number <= max && number > 0) {
        return number
      }
    }
  }
}
