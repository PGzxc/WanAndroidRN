import type React from 'react';
import type { IButtonComponentType } from './types';
export declare function createButton<ButtonProps, TextProps, GroupProps, SpinnerProps, IconProps>({ Root, Text, Group, Spinner, Icon, }: {
    Root: React.ComponentType<ButtonProps>;
    Text: React.ComponentType<TextProps>;
    Group: React.ComponentType<GroupProps>;
    Spinner: React.ComponentType<SpinnerProps>;
    Icon: React.ComponentType<IconProps>;
}): IButtonComponentType<ButtonProps, GroupProps, SpinnerProps, TextProps, IconProps>;
//# sourceMappingURL=index.d.ts.map