/// <reference types="react" />
import { useLink } from './useLink';
import type { InterfaceLinkProps, IUseLinkProp, ILinkComponentType } from './types';
declare const createLink: <Root, TextProps>({ Root, Text, }: {
    Root: import("react").ComponentType<Root>;
    Text: import("react").ComponentType<TextProps>;
}) => ILinkComponentType<Root, TextProps>;
export type { InterfaceLinkProps, IUseLinkProp };
export { createLink, useLink };
//# sourceMappingURL=index.d.ts.map