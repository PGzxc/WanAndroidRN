declare let ResizeObserver: {
    new (callback: ResizeObserverCallback): ResizeObserver;
    prototype: ResizeObserver;
};
declare const polyfillResizeObserver: (resizeObserver: any) => void;
export { ResizeObserver, polyfillResizeObserver };
