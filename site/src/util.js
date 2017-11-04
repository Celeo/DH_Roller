import { randInt } from 'crypto-rand'


export const getRoll = (max) => {
  return randInt(1, max)
}
