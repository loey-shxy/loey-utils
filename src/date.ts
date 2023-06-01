/**
 * @description 交换日期/时间
 * @param startDateTime 开始时间
 * @param endDateTime 结束时间
 * @returns {Array} [startDateTime, endDateTime]
 */
export const exchangeDateTime = (startDateTime: number | string | Date, endDateTime: number | string | Date): [any, any] => {
  if (!startDateTime || !endDateTime) return [startDateTime, endDateTime]

  if (new Date(startDateTime).valueOf() > new Date(endDateTime).valueOf()) {
    return [endDateTime, startDateTime]
  }
  return [startDateTime, endDateTime]
}