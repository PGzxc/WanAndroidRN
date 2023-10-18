"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.polyfillResizeObserver = exports.ResizeObserver = void 0;
// @ts-ignore
let ResizeObserver = typeof window !== 'undefined' && (window === null || window === void 0 ? void 0 : window.ResizeObserver);
exports.ResizeObserver = ResizeObserver;
const polyfillResizeObserver = function polyfillResizeObserver(resizeObserver) {
    // @ts-ignore
    exports.ResizeObserver = ResizeObserver = (window === null || window === void 0 ? void 0 : window.ResizeObserver) || resizeObserver;
};
exports.polyfillResizeObserver = polyfillResizeObserver;
//# sourceMappingURL=ResizeObserver.js.map