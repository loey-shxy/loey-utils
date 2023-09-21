'use strict';

var _Object$freeze = require("@babel/runtime-corejs2/core-js/object/freeze");
var _typeof = require('@babel/runtime-corejs2/helpers/typeof');
var _Promise = require('@babel/runtime-corejs2/core-js/promise');
var _Date$now = require('@babel/runtime-corejs2/core-js/date/now');
var _Number$isInteger = require('@babel/runtime-corejs2/core-js/number/is-integer');
var _slicedToArray = require('@babel/runtime-corejs2/helpers/slicedToArray');
var _Set = require('@babel/runtime-corejs2/core-js/set');
var _Array$from = require('@babel/runtime-corejs2/core-js/array/from');
var _Symbol = require('@babel/runtime-corejs2/core-js/symbol');
var _Symbol$iterator = require('@babel/runtime-corejs2/core-js/symbol/iterator');
var _Array$isArray = require('@babel/runtime-corejs2/core-js/array/is-array');

/**
 * @description 判断是数字
 * @param str
 * @return {boolean}
 */
var isNumber = function isNumber(str) {
  return /^\d+$/.test(str + '');
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
 * @returns {boolean}
 */
var letterNumberChinese = function letterNumberChinese(value) {
  var reg = /^[\u0391-\uFFE5A-Za-z0-9]+$/;
  return reg.test(value);
};
/**
 * @description 验证英文数字
 * @param value
 * @returns {boolean}
 */
var letterNumber = function letterNumber(value) {
  var reg = /[A-Za-z0-9]$/;
  return reg.test(value);
};
/**
 * @description 验证正整数
 * @param value
 * @returns {boolean}
 */
var validateInteger = function validateInteger(value) {
  var reg = /^[1-9]\d*$/;
  return reg.test(value);
};
/**
 * @description 验证经度
 * @param value
 * @returns {boolean}
 */
var validateLng = function validateLng(value) {
  var reg = /^[-+]?(0(\.\d{1,15})?|([1-9](\d)?)(\.\d{1,15})?|1[0-7]\d{1}(\.\d{1,15})?|180(\.0{1,15})?)$/;
  return value != '' && reg.test(value);
};
/**
 * @description 验证纬度
 * @param value
 * @returns {boolean}
 */
var validateLat = function validateLat(value) {
  var reg = /^[-+]?((0|\d{1}|([1-8]\d?))(\.\d{1,15})?|90(\.0{1,15})?)$/;
  return value != '' && reg.test(value);
};
/**
 * @description 验证车牌号
 * @param value
 * @returns
 */
var validatePlateNum = function validatePlateNum(value) {
  var reg = /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]{1})$/;
  return reg.test(value);
};
/**
 * @description 验证身份证号
 * @param value
 * @returns
 */
var validateIdCard = function validateIdCard(value) {
  var reg = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  return reg.test(value);
};
/**
 * @description 验证邮箱
 * @param value
 * @returns
 */
var validateEmail = function validateEmail(value) {
  var reg = /[\w.~!@#$%^&*()]+@[\w.]+[\w]+/;
  return reg.test(value);
};
var validate = /*#__PURE__*/_Object$freeze({
  __proto__: null,
  isArray: isArray,
  isNumber: isNumber,
  isObject: isObject,
  letterNumber: letterNumber,
  letterNumberChinese: letterNumberChinese,
  validateEmail: validateEmail,
  validateIdCard: validateIdCard,
  validateInteger: validateInteger,
  validateLat: validateLat,
  validateLng: validateLng,
  validatePlateNum: validatePlateNum
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
/**
 * @description 获取当前日期是当月的第几周
 * @param date
 * @returns
 */
var getMonthWeek = function getMonthWeek(date) {
  var currentDay = new Date(date);
  var theSaturday = currentDay.getDate() + (6 - currentDay.getDay());
  return Math.ceil(theSaturday / 7);
};
var date = /*#__PURE__*/_Object$freeze({
  __proto__: null,
  exchangeDateTime: exchangeDateTime,
  getMonthWeek: getMonthWeek
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
 * @description 四舍五入保留fixed位小数
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
  return Math.round(number * Math.pow(10, fixed)) / Math.pow(10, fixed);
};
var utils = /*#__PURE__*/_Object$freeze({
  __proto__: null,
  numberFixed: numberFixed,
  preFixInt: preFixInt
});
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof _Symbol !== "undefined" && o[_Symbol$iterator] || o["@@iterator"];
  if (!it) {
    if (_Array$isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return _Array$from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
/**
 * @description 实现一个运行池处理多个并发请求
 * @param urls
 * @param maxConcurrentNum
 * @returns
 */
function runningPool(urls) {
  var maxConcurrentNum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  var pool = new _Set();
  var waitQueue = [];
  var request = function request(url) {
    return new _Promise(function (resolve, reject) {
      var isFull = pool.size >= maxConcurrentNum;
      var fn = function fn() {
        var request = fetch(url);
        request["finally"](function () {
          pool["delete"](fn);
          var next = waitQueue.shift();
          next && pool.add(next);
          setTimeout(function () {
            return next === null || next === void 0 ? void 0 : next();
          });
        });
        request.then(resolve);
        request["catch"](reject);
        return request;
      };
      if (isFull) {
        waitQueue.push(fn);
      } else {
        pool.add(fn);
        fn();
      }
    });
  };
  var _iterator = _createForOfIteratorHelper(urls.entries()),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
        index = _step$value[0],
        url = _step$value[1];
      request(url).then(function (res) {
        console.log(res);
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
var concurrentRequests = /*#__PURE__*/_Object$freeze({
  __proto__: null,
  runningPool: runningPool
});
exports.ConcurrentFetch = concurrentRequests;
exports.DateFormat = date;
exports.Tools = tools;
exports.Utils = utils;
exports.Validate = validate;
