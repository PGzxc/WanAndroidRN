import { Dispatch, MutableRefObject, SetStateAction } from 'react';
export declare function useStateWithRef<T>(initialValue?: T | (() => T)): [T | undefined, Dispatch<SetStateAction<T>>, MutableRefObject<T>];
