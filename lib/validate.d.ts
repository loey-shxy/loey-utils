/**
 * @description 判断是数字
 * @param str
 * @return {boolean}
 */
export declare const isNumber: (str: string | number) => boolean;
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
 * @returns {boolean}
 */
export declare const letterNumberChinese: (value: any) => boolean;
/**
 * @description 验证英文数字
 * @param value
 * @returns {boolean}
 */
export declare const letterNumber: (value: any) => boolean;
/**
 * @description 验证正整数
 * @param value
 * @returns {boolean}
 */
export declare const validateInteger: (value: any) => boolean;
/**
 * @description 验证经度
 * @param value
 * @returns {boolean}
 */
export declare const validateLng: (value: any) => boolean;
/**
 * @description 验证纬度
 * @param value
 * @returns {boolean}
 */
export declare const validateLat: (value: any) => boolean;
/**
 * @description 验证车牌号
 * @param value
 * @returns
 */
export declare const validatePlateNum: (value: string) => boolean;
/**
 * @description 验证身份证号
 * @param value
 * @returns
 */
export declare const validateIdCard: (value: string) => boolean;
/**
 * @description 验证邮箱
 * @param value
 * @returns
 */
export declare const validateEmail: (value: string) => boolean;
