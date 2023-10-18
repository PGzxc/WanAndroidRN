import React from 'react';
import type { PressableProps } from 'react-native';
declare function Pressable<T>(StyledPressable: React.ComponentType<T>): React.ForwardRefExoticComponent<React.PropsWithoutRef<T & Omit<PressableProps, "children"> & {
    tabIndex?: 0 | -1 | undefined;
} & {
    children?: React.ReactNode | (({ hovered, pressed, focused, focusVisible, disabled, }: {
        hovered?: boolean | undefined;
        pressed?: boolean | undefined;
        focused?: boolean | undefined;
        focusVisible?: boolean | undefined;
        disabled?: boolean | undefined;
    }) => React.ReactNode);
}> & React.RefAttributes<unknown>>;
export default Pressable;
//# sourceMappingURL=Pressable.d.ts.map