/**
 * @description 判断是数字
 * @param str
 * @return {boolean}
 */
export const isNumber = (str: string | number) => {
  return /^\d+$/.test(str+'')
}

/**
 * @description 判断对象
 * @param value 
 * @returns {boolean}
 */
export const isObject = (value: any) => {
  const type = typeof value
  return value != null && type === 'object' && !(value instanceof Array)
}

/**
 * @description 判断数组
 * @param value 
 * @returns {boolean}
 */
export const isArray = (value: any) => {
  const type = typeof value
  return value != null && type === 'object' && value instanceof Array
}

/**
 * @description 验证字母中文数字
 * @param value
 * @returns {boolean}
 */
export const letterNumberChinese = (value: any) => {

  const reg = /^[\u0391-\uFFE5A-Za-z0-9]+$/
  return reg.test(value)
}

/**
 * @description 验证英文数字
 * @param value
 * @returns {boolean}
 */
export const letterNumber = (value: any) => {
  const reg = /[A-Za-z0-9]$/
  return reg.test(value)
}

/**
 * @description 验证正整数
 * @param value
 * @returns {boolean}
 */
export const validateInteger = (value: any) => {
  const reg = /^[1-9]\d*$/
  return reg.test(value)
}

/**
 * @description 验证经度
 * @param value
 * @returns {boolean}
 */
export const validateLng = (value: any) => {
  const reg = /^[-+]?(0(\.\d{1,15})?|([1-9](\d)?)(\.\d{1,15})?|1[0-7]\d{1}(\.\d{1,15})?|180(\.0{1,15})?)$/

  return value != '' && reg.test(value)
}

/**
 * @description 验证纬度
 * @param value
 * @returns {boolean}
 */
export const validateLat = (value: any) => {
  const reg = /^[-+]?((0|\d{1}|([1-8]\d?))(\.\d{1,15})?|90(\.0{1,15})?)$/

  return value != '' && reg.test(value)
}

/**
 * @description 验证车牌号
 * @param value 
 * @returns 
 */
export const validatePlateNum = (value: string) => {
  const reg = /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]{1})$/
  return reg.test(value)
}

/**
 * @description 验证身份证号
 * @param value 
 * @returns 
 */
export const validateIdCard = (value: string) => {
  const reg = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  return reg.test(value)
}

/**
 * @description 验证邮箱
 * @param value 
 * @returns 
 */
export const validateEmail = (value: string) => {
  const reg = /[\w.~!@#$%^&*()]+@[\w.]+[\w]+/
  return reg.test(value)
}

/**
 * @description 验证只能输入-、字母、数字、中文
 * @param value 
 * @returns 
 */
export const validateCenterlineLetterNumberChinese = (value: string) => {
  return /^[-A-Za-z0-9\u4e00-\u9fa5]+$/.test(value)
}

/**
 * @description 验证只能输入_、字母、数字、中文
 * @param value 
 * @returns 
 */
export const validateUnderlineLetterNumberChinese = (value: string) => {
  return /^[_A-Za-z0-9\u4e00-\u9fa5]+$/.test(value)
}

/**
 * @description 验证必须有一位数字和字母
 * @param value 
 * @returns 
 */
export const validateLetterAndNumber = (value: string) => {
  return /^(?![^a-zA-Z]+$)(?!\D+$)/.test(value)
}

/**
 * @description 验证ip地址
 * @param value 
 * @returns 
 */
export const validateIp = (value: string) => {
  return /^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/.test(value)
}

/**
 * @description 验证手机号码
 * @param value 
 * @returns 
 */
export const validatePhone = (value: string) => {
  return /^1[3,4,5,7,8][0-9]{9}$/.test(value)
}

/**
 * @description 验证前后空格
 * @param value 
 * @returns 
 */
export const validatePreAndAfterSpace = (value: string) => {
  return /^\s+|\s+$/g.test(value)
}