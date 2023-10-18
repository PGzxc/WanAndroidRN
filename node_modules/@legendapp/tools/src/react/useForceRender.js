"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useForceRender = void 0;
const react_1 = require("react");
function useForceRender() {
    const [, forceRender] = (0, react_1.useReducer)((s) => s + 1, 0);
    return forceRender;
}
exports.useForceRender = useForceRender;
//# sourceMappingURL=useForceRender.js.map