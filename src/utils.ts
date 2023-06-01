/**
 * @description 两位数字
 * @param {number} number 
 * @returns {string}
 */
export const preFixInt = (number: number) => {
  return `${number}`.padStart(2, '0')
}

/**
 * @description 保留小数
 * @param {number} number 
 * @param {number} fixed 
 * @returns {number}
 */
export const numberFixed = (number: number, fixed = 2) => {
  if (Number.isInteger(number)) {
    return number
  }

  if (fixed < 0) {
    return Math.floor(number)
  }

  return Number(number.toFixed(fixed))
}

/**
 * @description 16进制转2进制
 * @param str 
 * @returns 
 */
const hexToBin = (str: string) => {
  const hexArray = [
    { key: 0, val: '0000' },
    { key: 1, val: '0001' },
    { key: 2, val: '0010' },
    { key: 3, val: '0011' },
    { key: 4, val: '0100' },
    { key: 5, val: '0101' },
    { key: 6, val: '0110' },
    { key: 7, val: '0111' },
    { key: 8, val: '1000' },
    { key: 9, val: '1001' },
    { key: 'A', val: '1010' },
    { key: 'B', val: '1011' },
    { key: 'C', val: '1100' },
    { key: 'D', val: '1101' },
    { key: 'E', val: '1110' },
    { key: 'F', val: '1111' },
  ]
  let value = ''
  const list = str.split('')
  list.forEach((item) => {
    const data = hexArray.find((hex) => hex.key === item)
    value = value.concat(data?.val as any)
  })
  return value
}

/**
 * @description 2进制转16进制
 * @param str 
 * @returns 
 */
const binToHex = (str: string) => {
  const hexArray = [
    { key: 0, val: '0000' },
    { key: 1, val: '0001' },
    { key: 2, val: '0010' },
    { key: 3, val: '0011' },
    { key: 4, val: '0100' },
    { key: 5, val: '0101' },
    { key: 6, val: '0110' },
    { key: 7, val: '0111' },
    { key: 8, val: '1000' },
    { key: 9, val: '1001' },
    { key: 'A', val: '1010' },
    { key: 'B', val: '1011' },
    { key: 'C', val: '1100' },
    { key: 'D', val: '1101' },
    { key: 'E', val: '1110' },
    { key: 'F', val: '1111' },
  ]
  let value = ''
  const list: string[] = []
  if (str.length % 4 !== 0) {
    const a = '0000'
    const b = a.substring(0, 4 - (str.length % 4))
    str = b.concat(str)
  }
  while (str.length > 4) {
    list.push(str.substring(0, 4))
    str = str.substring(4)
  }
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < hexArray.length; j++) {
      if (list[i] === hexArray[j].val) {
        value = value.concat(hexArray[j].key as any)
        break
      }
    }
  }
  return value
}