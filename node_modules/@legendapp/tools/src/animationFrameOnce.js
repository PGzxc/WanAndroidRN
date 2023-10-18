"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearAnimationFrameOnce = exports.animationFrameOnce = exports.hasAnimationFrameOnce = void 0;
const animationFrames = {};
function hasAnimationFrameOnce(name) {
    return !!animationFrames[name];
}
exports.hasAnimationFrameOnce = hasAnimationFrameOnce;
function animationFrameOnce(name, cb) {
    const t = animationFrames[name];
    if (t) {
        cancelAnimationFrame(t);
    }
    animationFrames[name] = requestAnimationFrame(() => {
        delete animationFrames[name];
        cb();
    });
}
exports.animationFrameOnce = animationFrameOnce;
function clearAnimationFrameOnce(name) {
    const t = animationFrames[name];
    if (t) {
        cancelAnimationFrame(t);
        delete animationFrames[name];
    }
}
exports.clearAnimationFrameOnce = clearAnimationFrameOnce;
//# sourceMappingURL=animationFrameOnce.js.map