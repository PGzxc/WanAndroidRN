"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObjectEmpty = exports.isFunction = exports.isBoolean = exports.isNumber = exports.isObject = exports.isString = exports.isArray = void 0;
function isArray(obj) {
    return Array.isArray(obj);
}
exports.isArray = isArray;
function isString(obj) {
    return typeof obj === 'string';
}
exports.isString = isString;
function isObject(obj) {
    return typeof obj === 'object' && obj !== null && !isArray(obj);
}
exports.isObject = isObject;
function isNumber(obj) {
    return typeof obj === 'number' && !isNaN(obj);
}
exports.isNumber = isNumber;
function isBoolean(obj) {
    return obj === true || obj === false;
}
exports.isBoolean = isBoolean;
function isFunction(obj) {
    return typeof obj === 'function';
}
exports.isFunction = isFunction;
function isObjectEmpty(obj) {
    return obj && isObject(obj) && Object.keys(obj).length === 0;
}
exports.isObjectEmpty = isObjectEmpty;
//# sourceMappingURL=is.js.map