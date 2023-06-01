/**
 * @description 判断是数字
 * @param str
 * @return {boolean}
 */
export const isNumber = (str: string) => {
  return /^\d+$/.test(str)
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
 * @param callback 
 * @returns 
 */
export const letterNumberChinese = (rule: any, value: any, callback: Function) => {
  if (!value) {
    callback()
    return
  }

  const reg = /^[\u0391-\uFFE5A-Za-z0-9]+$/
  if (!reg.test(value)) {
    callback(new Error('请输入英文字母、数字、汉字'))
  } else { 
    callback()
  }
}

/**
 * @description 验证英文数字
 * @param value 
 * @param callback 
 * @returns 
 */
export const letterNumber = (rule: any, value: any, callback: Function) => {
  if (!value) {
    callback()
    return
  }

  const reg = /^[A-Za-z0-9]\d*$/
  if (!reg.test(value)) {
    callback(new Error('请输入英文字母、数字'))
  } else {
    callback()
  }
}

/**
 * @description 验证正整数
 */
export const validateInteger = (rule: any, value: any, callback: Function) => {
  if (!value) {
    callback()
    return
  }

  const reg = /^[1-9]\d*$/
  if (!reg.test(value)) {
    callback(new Error('请输入正整数'))
  } else {
    callback()
  }
}

/**
 * @description 验证经度
 */
export const validateLng = (rule: any, value: any, callback: Function) => {
  const reg = /^[-+]?(0(\.\d{1,15})?|([1-9](\d)?)(\.\d{1,15})?|1[0-7]\d{1}(\.\d{1,15})?|180(\.0{1,15})?)$/

  if (value != '' && !reg.test(value)) {
    callback(new Error('请输入正确经度数值,-180至180之间'))
  } else {
    callback()
  }
}

/**
 * @description 验证纬度
 */
export const validateLat = (rule: any, value: any, callback: Function) => {
  const reg = /^[-+]?((0|\d{1}|([1-8]\d?))(\.\d{1,15})?|90(\.0{1,15})?)$/

  if (value != '' && !reg.test(value)) {
    callback(new Error('请输入正确的纬度,-90至90之间'))
  } else {
    callback()
  }
}