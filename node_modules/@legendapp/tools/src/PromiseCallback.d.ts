export declare class PromiseCallback<T = void> {
    promise: Promise<T>;
    private _resolve;
    private _isResolved;
    get isResolved(): boolean;
    constructor();
    resolve(value: T): void;
}
