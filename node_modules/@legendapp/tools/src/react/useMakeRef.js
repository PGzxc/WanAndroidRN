"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMakeRef = void 0;
const react_1 = require("react");
function useMakeRef(value) {
    const ref = (0, react_1.useRef)();
    ref.current = value;
    return ref;
}
exports.useMakeRef = useMakeRef;
//# sourceMappingURL=useMakeRef.js.map