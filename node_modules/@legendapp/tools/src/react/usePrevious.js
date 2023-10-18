"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePrevious = void 0;
const react_1 = require("react");
function usePrevious(value) {
    const ref = (0, react_1.useRef)();
    const ret = ref.current;
    ref.current = value;
    return ret;
}
exports.usePrevious = usePrevious;
//# sourceMappingURL=usePrevious.js.map