"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInterval = void 0;
const react_1 = require("react");
function useInterval(cb, ms) {
    (0, react_1.useEffect)(() => {
        if (cb && ms !== undefined && ms !== null) {
            const interval = setInterval(cb, ms);
            return () => clearInterval(interval);
        }
        return undefined;
    }, [ms, cb]);
}
exports.useInterval = useInterval;
//# sourceMappingURL=useInterval.js.map