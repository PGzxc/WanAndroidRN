import { RefObject } from 'react';
export declare const useComponentSize: (ref: RefObject<HTMLElement>) => {
    width: number;
    height: number;
};
export declare const useComponentSizeChange: (ref: RefObject<HTMLElement>, cb: (value: {
    width: number;
    height: number;
}) => void) => {
    width: number;
    height: number;
};
