"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStateWithRef = void 0;
const react_1 = require("react");
const is_1 = require("../is");
function useStateWithRef(initialValue) {
    const [value, setValue] = (0, react_1.useState)(initialValue);
    const ref = (0, react_1.useRef)(value);
    // Set wraps around useState's set and saves to ref
    const set = (0, react_1.useCallback)((v) => {
        if ((0, is_1.isFunction)(v)) {
            v = v(ref.current);
        }
        ref.current = v;
        setValue(v);
    }, []);
    return [value, set, ref];
}
exports.useStateWithRef = useStateWithRef;
//# sourceMappingURL=useStateWithRef.js.map