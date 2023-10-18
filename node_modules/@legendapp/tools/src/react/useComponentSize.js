"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useComponentSizeChange = exports.useComponentSize = void 0;
const react_1 = require("react");
const ResizeObserver_1 = require("../ResizeObserver");
const useForceRender_1 = require("./useForceRender");
function getSize(el) {
    return el
        ? {
            width: el.offsetWidth,
            height: el.offsetHeight,
        }
        : {
            width: 0,
            height: 0,
        };
}
const useComponentSize = function useComponentSize(ref) {
    const refSize = (0, react_1.useRef)({ width: 0, height: 0 });
    const fr = (0, useForceRender_1.useForceRender)();
    const handleResize = (0, react_1.useCallback)(() => {
        if (ref.current) {
            const oldSize = refSize.current;
            const newSize = getSize(ref.current);
            if (newSize && (newSize.width !== oldSize.width || newSize.height !== oldSize.height)) {
                refSize.current = newSize;
                fr();
            }
        }
    }, [ref, fr]);
    // @ts-ignore
    (0, react_1.useLayoutEffect)(() => {
        const el = ref.current;
        if (el) {
            handleResize();
            let resizeObserver = new ResizeObserver_1.ResizeObserver(handleResize);
            resizeObserver.observe(el);
            return () => {
                resizeObserver.disconnect();
                resizeObserver = undefined;
            };
        }
    }, [ref.current]); // eslint-disable-line react-hooks/exhaustive-deps
    return refSize.current;
};
exports.useComponentSize = useComponentSize;
const useComponentSizeChange = function useComponentSizeChange(ref, cb) {
    const refSize = (0, react_1.useRef)({ width: 0, height: 0 });
    const handleResize = (0, react_1.useCallback)(() => {
        if (ref.current) {
            const oldSize = refSize.current;
            const newSize = getSize(ref.current);
            if (newSize && (newSize.width !== oldSize.width || newSize.height !== oldSize.height)) {
                refSize.current = newSize;
                cb === null || cb === void 0 ? void 0 : cb(newSize);
            }
        }
    }, [ref, cb]);
    // @ts-ignore
    (0, react_1.useEffect)(() => {
        const el = ref.current;
        if (el) {
            handleResize();
            let resizeObserver = new ResizeObserver_1.ResizeObserver(handleResize);
            resizeObserver.observe(el);
            return () => {
                resizeObserver.disconnect();
                resizeObserver = undefined;
            };
        }
    }, [ref.current]); // eslint-disable-line react-hooks/exhaustive-deps
    return refSize.current;
};
exports.useComponentSizeChange = useComponentSizeChange;
//# sourceMappingURL=useComponentSize.js.map