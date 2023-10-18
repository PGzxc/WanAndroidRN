"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTimeout = void 0;
const react_1 = require("react");
const useTimeout = (callback, delay) => {
    (0, react_1.useEffect)(() => {
        if (delay !== null) {
            const id = setTimeout(callback, delay);
            return () => clearTimeout(id);
        }
    }, []);
};
exports.useTimeout = useTimeout;
//# sourceMappingURL=useTimeout.js.map