"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearTimeoutOnce = exports.timeoutOnce = exports.hasTimeoutOnce = void 0;
const timeouts = {};
function hasTimeoutOnce(name) {
    return !!timeouts[name];
}
exports.hasTimeoutOnce = hasTimeoutOnce;
function timeoutOnce(name, cb, time, ...args) {
    const t = timeouts[name];
    if (t) {
        clearTimeout(t);
    }
    timeouts[name] = setTimeout(() => {
        delete timeouts[name];
        cb(...args);
    }, time);
}
exports.timeoutOnce = timeoutOnce;
function clearTimeoutOnce(name) {
    const t = timeouts[name];
    if (t) {
        clearTimeout(t);
        delete timeouts[name];
    }
}
exports.clearTimeoutOnce = clearTimeoutOnce;
//# sourceMappingURL=timeoutOnce.js.map