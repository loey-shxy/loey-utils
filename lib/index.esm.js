import _Object$freeze from "@babel/runtime-corejs2/core-js/object/freeze";
import _typeof from '@babel/runtime-corejs2/helpers/typeof';
import _Promise from '@babel/runtime-corejs2/core-js/promise';
import _Date$now from '@babel/runtime-corejs2/core-js/date/now';
import _Number$isInteger from '@babel/runtime-corejs2/core-js/number/is-integer';

/**
 * @description 判断是数字
 * @param str
 * @return {boolean}
 */
var isNumber = function isNumber(str) {
  return /^\d+$/.test(str);
};
/**
 * @description 判断对象
 * @param value
 * @returns {boolean}
 */
var isObject = function isObject(value) {
  var type = _typeof(value);
  return value != null && type === 'object' && !(value instanceof Array);
};
/**
 * @description 判断数组
 * @param value
 * @returns {boolean}
 */
var isArray = function isArray(value) {
  var type = _typeof(value);
  return value != null && type === 'object' && value instanceof Array;
};
/**
 * @description 验证字母中文数字
 * @param value
 * @param callback
 * @returns
 */
var letterNumberChinese = function letterNumberChinese(rule, value, callback) {
  if (!value) {
    callback();
    return;
  }
  var reg = /^[\u0391-\uFFE5A-Za-z0-9]+$/;
  if (!reg.test(value)) {
    callback(new Error('请输入英文字母、数字、汉字'));
  } else {
    callback();
  }
};
/**
 * @description 验证英文数字
 * @param value
 * @param callback
 * @returns
 */
var letterNumber = function letterNumber(rule, value, callback) {
  if (!value) {
    callback();
    return;
  }
  var reg = /^[A-Za-z0-9]\d*$/;
  if (!reg.test(value)) {
    callback(new Error('请输入英文字母、数字'));
  } else {
    callback();
  }
};
/**
 * @description 验证正整数
 */
var validateInteger = function validateInteger(rule, value, callback) {
  if (!value) {
    callback();
    return;
  }
  var reg = /^[1-9]\d*$/;
  if (!reg.test(value)) {
    callback(new Error('请输入正整数'));
  } else {
    callback();
  }
};
/**
 * @description 验证经度
 */
var validateLng = function validateLng(rule, value, callback) {
  var reg = /^[-+]?(0(\.\d{1,15})?|([1-9](\d)?)(\.\d{1,15})?|1[0-7]\d{1}(\.\d{1,15})?|180(\.0{1,15})?)$/;
  if (value != '' && !reg.test(value)) {
    callback(new Error('请输入正确经度数值,-180至180之间'));
  } else {
    callback();
  }
};
/**
 * @description 验证纬度
 */
var validateLat = function validateLat(rule, value, callback) {
  var reg = /^[-+]?((0|\d{1}|([1-8]\d?))(\.\d{1,15})?|90(\.0{1,15})?)$/;
  if (value != '' && !reg.test(value)) {
    callback(new Error('请输入正确的纬度,-90至90之间'));
  } else {
    callback();
  }
};
var validate = /*#__PURE__*/_Object$freeze({
  __proto__: null,
  isArray: isArray,
  isNumber: isNumber,
  isObject: isObject,
  letterNumber: letterNumber,
  letterNumberChinese: letterNumberChinese,
  validateInteger: validateInteger,
  validateLat: validateLat,
  validateLng: validateLng
});

/**
 * @description 交换日期/时间
 * @param startDateTime 开始时间
 * @param endDateTime 结束时间
 * @returns {Array} [startDateTime, endDateTime]
 */
var exchangeDateTime = function exchangeDateTime(startDateTime, endDateTime) {
  if (!startDateTime || !endDateTime) return [startDateTime, endDateTime];
  if (new Date(startDateTime).valueOf() > new Date(endDateTime).valueOf()) {
    return [endDateTime, startDateTime];
  }
  return [startDateTime, endDateTime];
};
var date = /*#__PURE__*/_Object$freeze({
  __proto__: null,
  exchangeDateTime: exchangeDateTime
});
var sleep = function sleep(ms) {
  return new _Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
};
var sleepSync = function sleepSync(ms) {
  var endTime = _Date$now() + ms;
  while (1) {
    if (_Date$now() > endTime) {
      return;
    }
  }
};
var tools = /*#__PURE__*/_Object$freeze({
  __proto__: null,
  sleep: sleep,
  sleepSync: sleepSync
});

/**
 * @description 两位数字
 * @param {number} number
 * @returns {string}
 */
var preFixInt = function preFixInt(number) {
  return "".concat(number).padStart(2, '0');
};
/**
 * @description 保留小数
 * @param {number} number
 * @param {number} fixed
 * @returns {number}
 */
var numberFixed = function numberFixed(number) {
  var fixed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  if (_Number$isInteger(number)) {
    return number;
  }
  if (fixed < 0) {
    return Math.floor(number);
  }
  return Number(number.toFixed(fixed));
};
var utils = /*#__PURE__*/_Object$freeze({
  __proto__: null,
  numberFixed: numberFixed,
  preFixInt: preFixInt
});
export { date as DateFormat, tools as Tools, utils as Utils, validate as Validate };
