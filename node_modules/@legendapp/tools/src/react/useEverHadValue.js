"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEverHadValue = void 0;
const react_1 = require("react");
const useEverHadValue = function useEverHadValue(value, targetValue) {
    const ref = (0, react_1.useRef)(false);
    ref.current = ref.current || value === targetValue;
    return ref.current;
};
exports.useEverHadValue = useEverHadValue;
//# sourceMappingURL=useEverHadValue.js.map