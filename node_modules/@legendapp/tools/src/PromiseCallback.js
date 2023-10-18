"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseCallback = void 0;
class PromiseCallback {
    constructor() {
        this.promise = new Promise((resolve) => (this._resolve = resolve));
    }
    get isResolved() {
        return this._isResolved;
    }
    resolve(value) {
        this._isResolved = true;
        this._resolve(value);
    }
}
exports.PromiseCallback = PromiseCallback;
//# sourceMappingURL=PromiseCallback.js.map