import { ComponentType } from 'react';
declare type TypeOnError = (error: Error, info: ErrorInfo) => boolean | void;
export interface ErrorInfo {
    componentStack: string;
}
export interface Config {
    onError?: TypeOnError;
    ErrorBoundary?: any;
}
export declare function configureMemoFnComponent(config: Config): void;
export declare function MemoFnComponent<T extends ComponentType<any>>(Component: T, onError?: TypeOnError): T;
export declare function MemoFnComponentWithRef<T extends ComponentType<any>>(Component: T, onError?: TypeOnError): T;
export {};
