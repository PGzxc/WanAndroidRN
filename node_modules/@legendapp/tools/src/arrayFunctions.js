"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayInsertSorted = exports.arrayRemoveAt = exports.arrayRemove = void 0;
function arrayRemove(array, value) {
    const index = array.indexOf(value);
    if (index >= 0) {
        array.splice(index, 1);
    }
    return index;
}
exports.arrayRemove = arrayRemove;
function arrayRemoveAt(array, index) {
    return array.splice(index, 1)[0];
}
exports.arrayRemoveAt = arrayRemoveAt;
// Binary search to find insertion index
function arrayFindInsertIndex(array, ele, comp) {
    let low = 0;
    let high = array.length - 1;
    while (low <= high) {
        const i = (low + high) >> 1;
        const c = comp(array[i], ele);
        if (c < 0) {
            low = i + 1;
        }
        else if (c > 0) {
            high = i - 1;
        }
        else {
            return i;
        }
    }
    return low;
}
function arrayInsertSorted(array, ele, comp) {
    const idx = arrayFindInsertIndex(array, ele, comp);
    array.splice(idx, 0, ele);
    return idx;
}
exports.arrayInsertSorted = arrayInsertSorted;
//# sourceMappingURL=arrayFunctions.js.map