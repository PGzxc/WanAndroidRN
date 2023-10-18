"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStableCallback = void 0;
const useMakeRef_1 = require("./useMakeRef");
const react_1 = require("react");
function useStableCallback(callback) {
    const ref = (0, useMakeRef_1.useMakeRef)(callback);
    return (0, react_1.useCallback)((...args) => {
        var _a;
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.call(ref, ...args);
    }, []);
}
exports.useStableCallback = useStableCallback;
//# sourceMappingURL=useStableCallback.js.map