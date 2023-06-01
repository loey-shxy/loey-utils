/**
 * @description 判断是数字
 * @param str
 * @return {boolean}
 */
export declare const isNumber: (str: string) => boolean;
/**
 * @description 判断对象
 * @param value
 * @returns {boolean}
 */
export declare const isObject: (value: any) => boolean;
/**
 * @description 判断数组
 * @param value
 * @returns {boolean}
 */
export declare const isArray: (value: any) => boolean;
/**
 * @description 验证字母中文数字
 * @param value
 * @param callback
 * @returns
 */
export declare const letterNumberChinese: (rule: any, value: any, callback: Function) => void;
/**
 * @description 验证英文数字
 * @param value
 * @param callback
 * @returns
 */
export declare const letterNumber: (rule: any, value: any, callback: Function) => void;
/**
 * @description 验证正整数
 */
export declare const validateInteger: (rule: any, value: any, callback: Function) => void;
/**
 * @description 验证经度
 */
export declare const validateLng: (rule: any, value: any, callback: Function) => void;
/**
 * @description 验证纬度
 */
export declare const validateLat: (rule: any, value: any, callback: Function) => void;
